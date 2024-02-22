[![Shortcut Banner](https://i.imgur.com/hZW1piF.png)](https://www.icloud.com/shortcuts/e14fcc3167a3411281d535561e6d5a6b)

## Table of Contents

-   [Motivation](#motivation)
-   [How It Works](#how-it-works)
-   [Demo](#demo)
-   [Conclusion](#conclusion)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Credits](#credits)

## Motivation

The Import Questions feature in Shortcuts is crucial for developers, allowing users to customize shortcuts interactively. However, it has a limitation – it doesn't support multi-line questions. This limitation makes detailed explanations look messy when pasted. My shortcut addresses this issue, making your import questions visually appealing.

![Example Issue](https://i.imgur.com/El2TFnh.jpg)

Since my [Reddit post](https://www.reddit.com/r/shortcuts/comments/zluvtf/adding_line_breaks_inside_shortcut_setup_questions/), users have faced this bug without a proper solution. My shortcut solves this problem, enhancing the import experience.

## How It Works

1.  Run the shortcut.
2.  Type or paste your import question.
    -   **Note:** Ensure your text is properly paragraphed.
3.  Let the shortcut work its magic, adding strategic whitespace to create a multi-line import question, which is copied to your clipboard.
4.  Paste the copied text into the import question editor for a cleaner, more organized look.

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
