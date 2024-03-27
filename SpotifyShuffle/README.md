![Shortcut Banner](https://i.imgur.com/5jZXhCD.png)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Disclaimer](#disclaimer)
-   [Credits](#credits)

## How It Works

**Spotify Shuffle** allows you to curate a list of links to your favorite **artists**, **albums**, and **playlists** from Spotify. It will randomly select one link and shuffle the play order in the Spotify app. Add one or as many as you like!

It uses the Spotify API to initiate playback on your device. You can also disable shuffle mode in the shortcut if you prefer to listen to your music in the specified order.

### Notes

-   This shortcut does not access any Spotify data related to your liked artists/albums/playlists. You need to add it to the shortcut manually to listen to it.
-   Your device needs to be unlocked for the shortcut to run.
-   Integrate with automations! For example, a **CarPlay** automation for auto-playing music when you connect to your vehicle.

## Prerequisites

<a href="https://apps.apple.com/us/app/files/id1232058109">
	<img src="https://i.imgur.com/gyNTIdc.png" alt="files-badge" width="14.21%"></a>
<a href="https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580">
	<img src="https://i.imgur.com/6TtzE6n.png" alt="spotify-badge" width="16.79%"></a>

> **NOTE**: You need [Spotify Premium](https://www.spotify.com/us/premium/) and an active internet connection to run this shortcut.

## Getting Started

### Step 1: Spotify API Setup

This section guides you on retrieving your **Client ID**, **Client Secret**, and **Device ID** from the Spotify API (_don't worry, it's super easy!_).

1. Head to the [Spotify API](https://developer.spotify.com/documentation/web-api) page and log in.
2. Navgiate to your [dashboard](https://developer.spotify.com/dashboard) and click **Create app**.
3. Fill out the following details and click **Save**.
    - App name: `Apple Shortcuts`
    - App description: `API Access For Apple Shortcuts`
    - Redirect URI: `https://spenpal.github.io/AppleShortcuts/SpotifyShuffle/`
    - Which API/SDKs are you planning to use?: `Web API`
4. Click **Settings**, find your **Client ID**, and view **Client Secret**.
5. Open a new tab and visit the [Get Playback State](https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback) page.
    1. Open the Spotify app (_on the device you'll download the shortcut on_) and play any random song.
    2. Hit **Try it** on the [Get Playback State](https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback) page.
    3. In the _Response Sample_ section, locate the _**device**_ field. Below it, you'll find the _**id**_ field. Your **Device ID** is the alphanumeric value to the right of _**id**_.
        - If you need visual guidance, refer to this [image](https://i.imgur.com/z1JlGR8.png).
6. Copy your **Client ID**, **Client Secret**, and **Device ID** to the device where you'll download the shortcut.

### Step 2: Shortcut Setup

1. Download this shortcut and follow the initial setup (_refer to [Settings](#settings) for details_).
2. Tap **Done** and run the shortcut. Follow the instructions for the **New Download** process.

## Settings

Configure the following settings to your preferences.

### Spotify API Settings

Refer to [Getting Started](#getting-started) for details on retrieving the first three settings.

1. **Client ID**: Credential to access your Spotify API app (_like a username_).
2. **Client Secret**: Credential to access your Spotify API app (_like a password_).
3. **Device ID**: Unique identifier for your device in the Spotify API database.
4. **Shuffle**: Enable/disable shuffle mode.
    - Default: **True**

### Music Settings

Add or remove **artist/album/playlist** links here.

-   **Add Music**
    1.  Tap on **Add new item**, and then **Text**.
    2.  On the left (_Key_), add the music's name. On the right (_Text_), paste the Spotify link.
-   **Remove Music**
    1.  Tap the ⛔️ icon for the music you want to remove, then tap **Delete**.

> **NOTE**: `Liked Songs` is a special setting as there is no shareable link for your `Liked Songs` playlist. Set it to **True** to include it; otherwise, set it to **False**. _**Do not**_ delete this setting!

### Change Settings

Follow these steps to change the above settings at any time.

1. Edit the shortcut (_by tapping the three dots in the upper right_).
2. Scroll down to the **Settings** section.
3. Adjust values in the _Dictionary_ objects.
    - The first is the **API Settings** (_usually doesn't need changes after initial setup_).
    - The second is the **Music Settings** where you can add/remove music.

### Transfer Settings

Settings won't automatically transfer to new versions. You must copy and paste them manually.

1.  Edit the old shortcut, go to the **Settings** section, and copy the necessary value(s).
2.  Edit the new shortcut, go to the **Settings** section, and paste the value(s).

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

## Disclaimer

_The **Spotify Shuffle** shortcut is an independent and personal fan project developed by **spenpal**. This shortcut is not affiliated, endorsed, or sponsored by **Spotify®**. Any reference to **Spotify®** or its trademarks is purely for descriptive purposes._

_The **Spotify Shuffle** shortcut is designed to provide users with a convenient way to auto-play their favorite Spotify music. The development and maintenance of this shortcut are the sole responsibility of **spenpal**, and it operates separately from the official [Spotify](https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580) app._

_Please note that this disclaimer is for informational purposes and may be subject to updates as needed._

## Credits

-   Graphics created with [MediaKit](https://routinehub.co/shortcut/1911).
