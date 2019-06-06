import { isDarkModeEnabled } from "nativescript-dark-mode";
import { Observable } from "tns-core-modules/data/observable";

export class HomeViewModel extends Observable {
    constructor() {
        super();
        console.log("Dark mode enabled? " + isDarkModeEnabled());
    }
}
