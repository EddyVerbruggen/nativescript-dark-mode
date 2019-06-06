import * as app from "tns-core-modules/application";
import { _addOnDarkModeChangedListener, _setDarkModeStyleSheet, emitIfModeChangedEvent } from "./dark-mode.common";

(() => {
  if (isDarkModeSupported()) {
    app.on("resume", () => emitIfModeChangedEvent(isDarkModeEnabled()));
  }
})();

export function setDarkModeStyleSheet(filename: string): void {
  _setDarkModeStyleSheet(filename);
}

export function addOnDarkModeChangedListener(listener: (isDarkMode: boolean) => void) {
  _addOnDarkModeChangedListener(listener);
}

export function isDarkModeSupported(): boolean {
  // Android has night mode support since API level 8,
  // but it's up to vendors to really support it
  return true;
}

export function isDarkModeEnabled(): boolean {
  // Note that this is an alternative solution that works just as well but feels a little hackier:
  //   const nightModeFlags = app.android.context.getResources().getConfiguration().uiMode & android.content.res.Configuration.UI_MODE_NIGHT_MASK;
  //   return nightModeFlags === android.content.res.Configuration.UI_MODE_NIGHT_YES;

  const uiModeManager: android.app.UiModeManager = app.android.context.getSystemService(android.content.Context.UI_MODE_SERVICE);
  return android.app.UiModeManager.MODE_NIGHT_YES === uiModeManager.getNightMode();
}
