![Shortcut Banner](https://i.imgur.com/yNuPpgU.png)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Credits](#credits)

## How It Works

**Wallpaper Roulette** fetches a random wallpaper from [Unsplash](https://unsplash.com/), sizing it to your device's resolution for both the lock and home screens.

The current wallpaper is saved in your `Files` app at: "_**iCloud Drive/Shortcuts/WallpaperRoulette/**_". If you're particularly fond of the current wallpaper, save it to your `Photos` app by navigating to the folder. With each new run of the shortcut, the previous wallpaper is deleted from the `Files` app, making room for the new one.

If you have specific wallpaper preferences, input keywords for a guided search. Keep in mind, it's a wallpaper **finder**, not a _generator_ - embracing the spirit of randomness!

## Prerequisites

[<img src="https://i.imgur.com/Uf9cvrl.png" alt="actions-badge" width="17.33%"/>](https://apps.apple.com/us/app/actions/id1586435171)

## Getting Started

1. Ensure [Prerequisites](#prerequisites) are installed.
2. Download the shortcut and follow the setup (_refer to [Settings](#settings) for details_).
3. Test the shortcut to ensure it works!

### Automation

To update your wallpaper regularly:

1.  Open the `Shortcuts` app, and go to the **Automation** tab.
2.  Tap on the "**+**" at the top right.
3.  Choose **Time of Day**.
4.  Select your preferred time and frequency for the shortcut to run.
    -   Ensure you choose _Run Immediately_ to skip confirmation prompts.
5.  Tap **Next** and search for "**Wallpaper Roulette**" to select it.

The shortcut will now run at your specified times.

## Settings

Configure the following settings to your preferences.

1.  **Wallpaper**
    -   Choose which wallpaper to update.
    -   Default: **Wallpaper 1**
2.  **Location**
    -   Select where you want the new wallpapers applied.
    -   Default: **Lock Screen** and **Home Screen**.
3.  **Keywords**
    -   Add keywords to refine your wallpaper search.
    -   Default: _wallpaper_
    -   For best results, stick to **one additional keyword**.

### Change Settings

Follow these steps to change the above settings at any time.

1.  Long-press on the shortcut and select **Details**.
2.  Navigate to the **Setup** tab and tap **Customize Shortcut**.
3.  Follow the setup once again.

## Feedback

Your feedback is highly appreciated! For any issues, suggestions, or general feedback, please visit my [GitHub Issues](https://github.com/spenpal/AppleShortcuts/issues/new/choose) page, reach out via [Reddit](https://www.reddit.com/user/spenpal_dev), or submit anonymously using this [Google form](https://forms.gle/KdJXQhysQQj4yBtS7).

## Auto-Updater

This shortcut utilizes the [UpdateKit API](https://www.mikebeas.com/updatekit-api/v1) for seamless updates.

-   Checks periodically for updates.
-   Retrieves your device's version to check compatibility.
    -   _If your device is incompatible with the shortcut, updates won't be presented_.
-   Won't check for updates, if you are offline.
    -   _It verifies your device's IP address to determine connection status_.
-   When an update is available, choose **Install** or **Skip**.

## Privacy

-   No sensitive/identifying information is requested ✅.
    -   _However, reviewing the shortcut's actions is your responsibility_.
-   If permissions are required, tap **Always Allow**.
    -   _You can manage these permissions in the shortcut's privacy settings_.

## Credits

-   Graphics created with [MediaKit](https://routinehub.co/shortcut/1911).
