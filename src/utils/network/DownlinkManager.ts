import { LocalStorageManager } from "@/utils/local/LocalStorageManager";
import { BatchManager } from "@/utils/batch/BatchManager";
import { DateManager } from "@/utils/date/DateManager";
import { MathManager } from "@/utils/math/MathManager";
import type { DateTime } from "luxon";

export class CustomDownlinkManager {
  private static instance: CustomDownlinkManager | null = null;

  value: null | number;
  date: DateTime;
  savedValue;

  private constructor() {
    this.value = null;
    this.date = DateManager.getDate();
    this.savedValue = LocalStorageManager.getFromLocal({ prop: "downlink" });
    if (!this.savedValue) {
      this.getValue({ attempt: 0 });
    } else {
      const savedDate = DateManager.fromISO(this.savedValue.date);
      if (DateManager.interval(savedDate, this.date) > 12) {
        this.getValue({ attempt: 0 });
      }
    }
  }

  public static getInstance(): CustomDownlinkManager {
    if (!CustomDownlinkManager.instance) {
      CustomDownlinkManager.instance = new CustomDownlinkManager();
    }
    return CustomDownlinkManager.instance;
  }

  deleteDownlinkFromLocal() {
    LocalStorageManager.deleteFromLocal({ prop: "downlink" });
  }

  async measureSpeed() {
    try {
      const fileSizeInBytes = 212 * 1024; // 10 MB file size
      const startTime = performance.now();
      await fetch("/src/assets/img/022.webp");
      const endTime = performance.now();
      const durationInSeconds = (endTime - startTime) / 1000; // Convert to seconds
      const downlinkSpeedMbps =
        ((fileSizeInBytes / durationInSeconds) * 8) / (1024 * 1024); // Calculate downlink speed in Mbps
      return downlinkSpeedMbps;
    } catch (error) {
      console.error("Can't measure downlink");
      return null;
    }
  }

  async batchTest() {
    const results = await BatchManager.iteratePromiseWithDelay({
      numTests: 5,
      callback: this.measureSpeed,
    });
    return results;
  }

  saveDownlinkToLocal() {
    LocalStorageManager.saveToLocal({
      prop: "downlink",
      value: {
        value: this.value,
        date: DateManager.toISO(this.date),
        from: "manager",
      },
    });
  }

  async repeat(attempt: number) {
    const MAX_TRIES = 3;
    if (attempt < MAX_TRIES) {
      await this.getValue({ attempt: attempt + 1 });
      return true;
    }

    if (attempt === MAX_TRIES && this.value! > 1) {
      return;
    }

    // IF REPEAT FAILED, VALUE BECOME NULL
    this.value = null;
    this.saveDownlinkToLocal();
    console.error(
      "Max retries reached. Unable to obtain desired downlink speed.",
    );
    return;
  }

  async saveOrRepeat(attempt: number, averageValue: number) {
    // IF RTT IS GOOD, END FUNCTION
    if (MathManager.isThresholdPassed({ value: averageValue, threshold: 50 })) {
      this.saveDownlinkToLocal();
      return;
    }

    // CHECK IF RTT IS ENOUGH BUT TEST IT AGAIN
    if (MathManager.isThresholdPassed({ value: averageValue, threshold: 2 })) {
      this.saveDownlinkToLocal();
    }

    // TEST IT AGAIN
    await this.repeat(attempt);
    return;
  }

  async getValue({ attempt }: { attempt: number }) {
    const results = await this.batchTest();
    this.value = MathManager.getAverageFromArray({ values: results });
    this.saveOrRepeat(attempt, this.value);
  }
}
