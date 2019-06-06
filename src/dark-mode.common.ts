import { getCssFileName, setCssFileName } from "tns-core-modules/application";

let _wasDarkMode = undefined;
let _onDarkModeChangedListener: (isDarkMode: boolean) => void;
let _darkModeStyleSheet: string;
let _origCssFilename: string;

export function _addOnDarkModeChangedListener(listener: (isDarkMode: boolean) => void) {
  _onDarkModeChangedListener = listener;
}

export function _setDarkModeStyleSheet(filename: string): void {
  _darkModeStyleSheet = filename;
}

export function emitIfModeChangedEvent(isNowDarkMode: boolean): void {
  if (isNowDarkMode !== _wasDarkMode) {
    _wasDarkMode = isNowDarkMode;
    _onDarkModeChangedListener && _onDarkModeChangedListener(isNowDarkMode);

    if (_darkModeStyleSheet) {
      if (!_origCssFilename) {
        _origCssFilename = getCssFileName();
      }

      // note that this only works reliably on cold boot
      if (isNowDarkMode) {
        setCssFileName(_darkModeStyleSheet);
      } else {
        setCssFileName(_origCssFilename);
      }
    }
  }
}
