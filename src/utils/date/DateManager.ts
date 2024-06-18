import { DateTime, Interval } from "luxon";
export class DateManager {
  static getDate() {
    return DateTime.now();
  }

  static toISO(date: DateTime): string {
    return date.toISO()!;
  }
  static fromISO(date: string) {
    return DateTime.fromISO(date);
  }

  static interval(date: DateTime, postDate: DateTime) {
    return Interval.fromDateTimes(date, postDate).length("hours");
  }
}
