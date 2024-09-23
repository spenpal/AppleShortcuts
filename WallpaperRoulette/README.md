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

If you have a specific wallpaper preference, input a keyword for a guided search. Keep in mind, it's a wallpaper **finder**, not a _generator_ - embracing the spirit of randomness!

Also, if you're particularly fond of the current wallpaper, you can save it to your `Photos` app.

## Prerequisites

<a href="https://apps.apple.com/us/app/files/id1232058109">
	<img src="https://i.imgur.com/gyNTIdc.png" alt="files-badge" width="14.21%"></a>
<a href="https://apps.apple.com/us/app/photos/id1584215428">
	<img src="https://i.imgur.com/WlLrStW.png" alt="photos-badge" width="16.62%"/></a>

## Getting Started

### Step 1: Unsplash API Setup

This section guides you on retrieving your **Access Key** from the Unsplash API (_don't worry, it's super easy!_).

1. [Login](https://unsplash.com/login) or [sign up](https://unsplash.com/join) for an Unsplash account.
2. Head over to your [Unsplash apps](https://unsplash.com/oauth/applications) and click **New Application**.
3. Check all the boxes and click **Accept terms**.
4. Fill out the following details and click **Create application**.
    - Application name: `Apple Shortcuts`
    - Description: `API Access For Apple Shortcuts`
5. Scroll down until you see the _Keys_ section.
6. Copy the **Access Key** to the device where you'll download the shortcut.

### Step 2: Shortcut Setup

1. Download the shortcut and follow the setup (_refer to [Settings](#settings) for details_).
2. Test the shortcut to ensure it works!

### Automation

To update your wallpaper regularly:

1.  Open the `Shortcuts` app, and go to the **Automation** tab.
2.  Tap on the "**+**" at the top right.
3.  Choose **Time of Day**.
4.  Select your preferred time and frequency for the shortcut to run.
    -   Ensure you choose **Run Immediately** to skip confirmation prompts.
5.  Tap **Next** and create a **New Blank Automation**.
6.  Add a **Text** action with the following content: `New`.
7.  Add a **Run Shortcut** action, selecting the **Wallpaper Roulette** shortcut, and providing the **Text** action as input.
8.  Tap **Done**.

The shortcut will now run at your specified times.

### Widget

Add the shortcut as a widget to your lock screen or home screen, so you can see your wallpaper update live! Check out how to do [that](https://support.apple.com/en-us/HT207122).

## Settings

Configure the following settings to your preferences.

1. **General**
    1. **Show Menu**
        - Display a menu of options when running the shortcut. When set to **False**, the default behavior is to set a new wallpaper automatically.
        - Default: **True**
    1. **Notifications**
        - Show notifications when a new wallpaper is set or when the current wallpaper is being saved.
        - Default: **True**
    1. **API Access Key**
        - The credential to access your Unsplash API app (_like a username_).
1. **Keyword**
    - Add a keyword to refine your wallpaper search.
    - Leave empty, if no preference.
1. **Wallpaper**
    - Choose which wallpaper to update.
    - Default: **Wallpaper 1**
1. **Location**
    - Select where you want the new wallpapers applied.
    - Default: **Lock Screen** and **Home Screen**.
1. **Album**
    - Select a `Photos` album when you want to save your current wallpaper in it.
    - Default: **Recents**

### Change Settings

Follow these steps to change the above settings at any time.

1. Long-press on the shortcut and select **Details**.
2. Navigate to the **Setup** tab and tap **Customize Shortcut**.
3. Follow the setup once again.

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
-   Menu icons provided by [Freepik on Flaticon](https://www.flaticon.com/free-icons/photo).
-   [@atnbueno](https://routinehub.co/user/atnbueno): [JS code](https://routinehub.co/shortcut/6758/) to check for internet connectivity.
