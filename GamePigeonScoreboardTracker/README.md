[![Shortcut Banner](https://i.imgur.com/vWE364B.png)](https://www.icloud.com/shortcuts/3072aa015d934e3187d54101e9314326)

## Table of Contents

-   [Motivation](#motivation)
-   [How It Works](#how-it-works)
-   [Demo](#demo)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Disclaimer](#disclaimer)
-   [Credits](#credits)

## Motivation

As a competitive GamePigeon player, I love tracking scores with my friends to determine the **ultimate GamePigeon champ** 👑. Initially, I used the iMessage conversation to keep track, but scores got lost, and the search bar wasn't helpful.

<p align="center">
	<img src="https://i.imgur.com/oKif6bq.jpg" alt="Keeping Scores in iMessage" width="35%">
</p>

Creating a Notes page was an option to keep track of multiple scoreboards but it was too cumbersome to add a new row each time. I wanted a user-friendly solution to track scores and share scoreboards with my friends effortlessly, but I am too broke to afford a MacBook to make an iOS app. So, I turned to `Shortcuts` to make my dream come true!

## How It Works

**GamePigeon Scoreboard Tracker** lets you create, view, and manage scoreboards with friends in a single, convenient menu. _And here's the cool part_: all your scoreboard data is **private to you**! It's stored on your iCloud Drive, not hosted anywhere where I or anyone else can see it (_unless you share it with someone_).

### Menu

-   **Create**: Start a new scoreboard with a friend and set unique nicknames.
    -   Only one scoreboard per friend is allowed.
-   **View**: Check current scores and game history with your friend.
    -   Game history is displayed in your timezone.
    -   Sort the history table by tapping on the `Date` header.
-   **Update**: Add a new game record to a scoreboard.
    -   Records who won, at which game, and when you updated the scoreboard.
    -   **NOTE**: You cannot delete records off a scoreboard.
-   **Invite**: Invite your friend to view and update the scoreboard.
    -   **Must watch** demo video in the [Demo](#demo) section to know how to invite your friend.
-   **Join**: Accept your friend's invitation to join their scoreboard!
    -   **Must watch** demo video in the [Demo](#demo) section to know how to join a scoreboard.
-   **Reset**: Reset a scoreboard.
-   **Delete**: Delete a scoreboard.
-   **Settings**
    -   **Get My ID**: Copy your unique ID to the clipboard.
        -   Needed when you are invited to join a scoreboard.
    -   **Documentation**: Navigate to this page.
    -   **Change Nicknames**: Change your or your friend's nickname on the scoreboard.
    -   **Update Contact**: Refresh contact info after changes in the `Contacts` app.
        -   Ensures profiles and images are displayed correctly.
        -   Must have up-to-date contact info on file **before inviting** your friend to the scoreboard.
    -   **Download**: Download a zip file of a scoreboard's files (`nicknames.json`, `scores.json`, `history.csv`) to your `Downloads` folder in iCloud Drive.

### Notes

1. Ensure there's enough space on your iCloud Drive for scoreboard files.
2. The shortcut needs several permissions for each scoreboard option. Once you tap **Always Allow** for each permission, you won't be prompted again.
3. If you invite a friend to join the scoreboard, designate one person as the **"recorder."** This prevents accidentally recording the same game when updating the scoreboard since there is no way to delete game records.

## Demo

![Demo Collage](https://i.imgur.com/shUb2Fj.png)

<p align="center">
	<a href="https://youtu.be/GjYjnd9sxgE">
		<img src="https://i.imgur.com/Tkiae4w.png" alt="Invite Demo" width="49%"></a>
	<a href="https://youtu.be/4knzqdvRJ9w">
		<img src="https://i.imgur.com/6pJXvQR.png" alt="Join Demo" width="49%"></a>
</p>

## Prerequisites

<a href="https://apps.apple.com/us/app/files/id1232058109">
	<img src="https://i.imgur.com/gyNTIdc.png" alt="files-badge" width="14.21%"></a>
<a href="https://apps.apple.com/us/app/contacts/id1069512615">
	<img src="https://i.imgur.com/bgBTkQM.png" alt="contacts-badge" width="19.32%"></a>
<a href="https://apps.apple.com/us/app/safari/id1146562112">
	<img src="https://i.imgur.com/XdOtb9i.png" alt="safari-badge" width="15%"/></a>

## Getting Started

1. Ensure [Prerequisites](#prerequisites) are installed.
2. Download and run the shortcut. Follow instructions for the **New User** process.

### Make It Like An App

Make this shortcut accessible on your home screen, _like an app icon._

1. Open the `Shortcuts` app.
2. Long press on the **GST** shortcut, and tap **Details**.
3. Choose **Add to Home Screen**.
4. Tap **Add** in the top right corner.

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

_The **GamePigeon Scoreboard Tracker** shortcut is an independent and personal fan project developed by **spenpal**. This shortcut is not affiliated, endorsed, or sponsored by **GamePigeon** or its creator. Any reference to **GamePigeon** or its trademarks is purely for descriptive purposes._

_The **GamePigeon Scoreboard Tracker** shortcut is designed to provide users with a convenient way to keep track of scores while playing GamePigeon games with friends. The development and maintenance of this shortcut are the sole responsibility of **spenpal**, and it operates separately from the official [GamePigeon](https://apps.apple.com/us/app/gamepigeon/id1124197642) app._

_Please note that this disclaimer is for informational purposes and may be subject to updates as needed._

## Credits

-   Graphics created with [MediaKit](https://routinehub.co/shortcut/1911).
-   Screenshots framed with [Screenshot Framer](https://routinehub.co/shortcut/8067/).
-   Menu icons provided by [Flaticon](https://www.flaticon.com/).
-   [@gluebyte](https://routinehub.co/user/gluebyte): For helping with JavaScript UUID generation and converting CSV data to an HTML table.
