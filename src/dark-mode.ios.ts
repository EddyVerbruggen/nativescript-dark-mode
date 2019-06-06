import * as app from "tns-core-modules/application";
import { device } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
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
  return parseInt(device.osVersion) >= 13;
}

export function isDarkModeEnabled(): boolean {
  return topmost().viewController.traitCollection.userInterfaceStyle === 2;
}

