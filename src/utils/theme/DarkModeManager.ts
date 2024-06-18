import { LocalStorageManager } from "@/utils/local/LocalStorageManager";
export class DarkModeManager {
  static setup() {
    // page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      DarkModeManager.setDark();
    } else {
      DarkModeManager.setLight();
    }
  }

  static setDark() {
    document.documentElement.classList.add("dark");
    DarkModeManager.saveThemeToLocal({ isDark: true });
  }

  static setLight() {
    document.documentElement.classList.remove("dark");
    DarkModeManager.saveThemeToLocal({ isDark: false });
  }

  static saveThemeToLocal({ isDark = true }) {
    isDark
      ? LocalStorageManager.saveToLocal({ prop: "theme", value: "dark" })
      : LocalStorageManager.saveToLocal({ prop: "theme", value: "light" });
  }

  static deleteThemeFromLocal() {
    LocalStorageManager.deleteFromLocal({ prop: "theme" });
  }
}
