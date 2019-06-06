import * as app from "tns-core-modules/application";

import { addOnDarkModeChangedListener, setDarkModeStyleSheet } from "nativescript-dark-mode";

// note that this only works reliably on cold boot so it's not an ideal approach
setDarkModeStyleSheet("./app-dark.css");

addOnDarkModeChangedListener((isDarkMode: boolean) => {
    console.log("Now on dark mode? " + isDarkMode);
});

app.run({ moduleName: "app-root" });
