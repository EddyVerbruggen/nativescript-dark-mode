# Dark Mode / Night Mode

> ⚠️️ This NativeScript plugin may become obsolete in the near future, because the awesome NativeScript team is working on built-in support for Dark Mode (and much more). If you're interested, [subscribe to this issue](https://github.com/NativeScript/NativeScript/issues/7313).

[![Build Status][build-status]][build-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-dark-mode.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-dark-mode
[npm-image]:https://img.shields.io/npm/v/nativescript-dark-mode.svg
[npm-url]:https://npmjs.org/package/nativescript-dark-mode
[downloads-image]:https://img.shields.io/npm/dm/nativescript-dark-mode.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

## What's this all about?
With iOS 13 comes a new Dark Mode which Apple would like you (as a developer) to adopt.
Even more, iOS will actively alter the appearance of your app's native UI components, so you **will** be affected by this change.

So to be able to load different CSS, images, or other assets when Dark Mode is enabled, you need some sort of
property you can check and a notification when Dark Mode is enabled/disabled by the user in the phone's settings.

That's where this plugin comes in.

> Note that as long as you don't build with Xcode 11, even devices running iOS 13 will not be affected.

> By the way, Android has had "Night Mode" support since API level 8, but it's up to the vendors to expose it properly to users. NativeScript-Android apps are not affected by this setting, but you might as well apply the same logic to Android's Night Mode as you do to iOS' Dark Mode, so this plugin unifies those APIs.

## Installation

```shell
tns plugin add nativescript-dark-mode
```

## Demo app

If you're stuck or want a quick demo of how this works, check out the demo app:

```shell
git clone https://github.com/EddyVerbruggen/nativescript-dark-mode
cd nativescript-dark-mode/src
npm run demo.ios # or demo.android
```

## API

### `isDarkModeSupported`

Dark Mode was added in iOS 13, so you could check this function.
It's not required as the plugin will take care of this check internally when the other API functions are called.
 
```typescript
import { isDarkModeSupported } from "nativescript-dark-mode";

const supported: boolean = isDarkModeSupported();
```

### `isDarkModeEnabled`

If at any moment you want to check for Dark Mode being enabled, you can do:

```typescript
import { isDarkModeEnabled } from "nativescript-dark-mode";

const darkModeEnabled: boolean = isDarkModeEnabled();
```

### `addOnDarkModeChangedListener`

To get a notification while your app is running, you can register a listener with the plugin.

If you want to get notified on app launch as well, make sure to do this before the app starts.
As an example, see `app.ts` in the demo folder in this repo.

```typescript
import { addOnDarkModeChangedListener } from "nativescript-dark-mode";

addOnDarkModeChangedListener((isDarkMode: boolean) => {
  console.log("Now on dark mode? " + isDarkMode);
});
```

### `setDarkModeStyleSheet` (unstable)

> ⚠️ This feature will probably be removed in an upcoming version, because we'll likely have a better (built-in) way soon.

If you want to load a different stylesheet when Dark Mode is enabled, then look no further.
There is one caveat though: currently, the stylesheet is **only applied on a cold start**,
so if the user switched to Dark Mode while the app is running, your app won't be affected until the next restart.

```typescript
import { setDarkModeStyleSheet } from "nativescript-dark-mode";

setDarkModeStyleSheet("./app-dark.css");
```

> **TIP:** you can extract all theme-independent CSS in `app.css` to `app-common.css` and add an `app-dark.css` that (just like `app.css`) extends `app-common.css`. Check the demo folder in this repo for an example.
