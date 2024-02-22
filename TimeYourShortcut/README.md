[![Shortcut Banner](https://i.imgur.com/bXe0HeD.png)](https://www.icloud.com/shortcuts/f492a8b0214847d88b18050199c5c93f)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Getting Started](#getting-started)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Credits](#credits)

## How It Works

**Time Your Shortcut** calculates the total run time of any shortcut in seconds, with millisecond precision. You can also test specific sections of your shortcut (_refer to [Getting Started](#getting-started) for details_).

### Notes

-   Run this shortcut against your tested shortcut **at least twice**. This is because permissions may be asked by the `Shortcuts` app for the first run.
-   If your tested shortcut involves user interaction, be aware that it contributes to the total run time.

## Getting Started

### Test Your Shortcut

1. Edit this shortcut (_by tapping the three dots in the upper right_).
2. Navigate to the **MAIN CODE** section, where you'll find a **Run Shortcut** action. Select the shortcut you want to test.
3. Exit edit mode and run it!

<p align="center">
	<img src="https://i.imgur.com/1GL46Xh.png" alt="run-shortcut-screenshot" width="33.33%">
</p>

### Test A Section Of Your Shortcut

To test a specific section of your shortcut, use the following [template](https://www.icloud.com/shortcuts/3b2108340a194486a10c7d8062cdb59d):

<p align="center">
	<img src="https://i.imgur.com/6YWt6NN.png" alt="test-section-template-screenshot" width="33.33%">
</p>

**NOTE**: Make sure to feed the _List_ variable as shortcut input to the **Run Shortcut** action.

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
