![Shortcut Banner](https://i.imgur.com/pJRwUSL.png)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Demo](#demo)
-   [Prerequisites](#prerequisites)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Credits](#credits)

## How It Works

**Sleep Time Calculator** simplifies bedtime and wake-up time decisions with four functions:

-   **Wake up at...**
    -   Enter your desired wake-up time, and the calculator suggests 4 bedtimes, each with varying sleep durations (from 4.5 to 9 hours).
        -   Optionally, set an alarm for your wake-up time.
-   **Fall asleep by...**
    -   Enter your desired bedtime, and the calculator suggests 4 wake-up times, each with varying sleep durations (from 4.5 to 9 hours).
    -   Optionally, set an alarm for one of the suggested wake-up times.
-   **Nap for...**
    -   Enter your desired nap time, and the calculator will set a nap timer.
-   **Sleep now!**
    -   For an immediate bedtime, the calculator suggests 6 wake-up times, each with varying sleep durations (from 1.5 to 9 hours).
    -   Optionally, set an alarm for one of the suggested wake-up times.

### Notes

-   To prevent clutter in the `Clock` app, any previously set alarms through this shortcut will be prompted to be deleted when you set a new alarm through this shortcut again.
    -   💡Tip: For automatic deletion, enable **Allow Deleting Without Confirmation** in your device’s settings (_Settings > Shortcuts > Advanced_).
-   The Sleep Time Calculator provides recommendations based on sleep cycles. The average adult needs 7-9 hours of sleep, but alternatives are offered for situations with less time. Individual sleep needs vary; consult a healthcare professional for persistent sleep issues.

### The Science

The Sleep Time Calculator applies scientific principles related to sleep cycles and duration for optimal bedtimes and wake-up times. The sleep cycle is divided into several stages: light sleep, deep sleep, and rapid eye movement (REM) sleep. Sleep cycles typically last around 90 minutes, and a typical night's sleep consists of several cycles. The goal of the calculator is to suggest times to wake up at the end of a cycle feeling refreshed, rather groggy.

For more in-depth sleep information, visit [Sleepopolis](https://sleepopolis.com/calculators/sleep/) (_the inspiration behind this shortcut_).

## Demo

![Demo Collage](https://i.imgur.com/4sGDZOq.png)

## Prerequisites

<a href="https://apps.apple.com/us/app/clock/id1584215688">
	<img src="https://i.imgur.com/SCZPuGU.png" alt="clock-badge" width="14.95%"></a>

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

-   Banner created with [MediaKit](https://routinehub.co/shortcut/1911).
-   Screenshots framed with [Screenshot Framer](https://routinehub.co/shortcut/8067/).
-   Idea inspired by [Sleepopolis](https://sleepopolis.com/calculators/sleep/).
-   [@atnbueno](https://routinehub.co/user/atnbueno): [JS code](https://routinehub.co/shortcut/6758/) to check for internet connectivity.
