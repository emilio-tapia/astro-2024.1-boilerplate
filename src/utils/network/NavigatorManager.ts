import { LocalStorageManager } from "@/utils/local/LocalStorageManager";
export class NavigatorAPIManager {
  static getConnectionProps() {
    const props = navigator.connection || null;

    return !!props ? props : null;
  }

  static saveToLocal() {
    LocalStorageManager.saveToLocal({
      prop: "downlink",
      value: {
        value: navigator.connection.rtt,
        date: new Date(),
        from: "api",
      },
    });
  }
}
