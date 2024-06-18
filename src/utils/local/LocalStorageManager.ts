export class LocalStorageManager {
  static saveToLocal({
    prop = "",
    value = "",
  }: {
    prop: string;
    value: any;
  }): void {
    if (!!value) localStorage[prop] = JSON.stringify(value);
    return;
  }

  static getFromLocal({ prop = "" }) {
    if (prop in localStorage) {
      return JSON.parse(localStorage[prop]);
    }
    return null;
  }

  static deleteFromLocal({ prop }: { prop: string }): void {
    if (prop in localStorage) {
      localStorage.removeItem(prop);
    }
    return;
  }
}
