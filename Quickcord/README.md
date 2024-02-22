[![Shortcut Banner](https://i.imgur.com/F6qR8kv.png)](https://www.icloud.com/shortcuts/2b1f2957cd3a431fbce5600fe49aac02)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Benefits](#benefits)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Feedback](#feedback)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Disclaimer](#disclaimer)
-   [Credits](#credits)

## How It Works

**Quickcord** simplifies sending _**any**_ content to a specific Discord channel directly from `Share Sheet` or `Clipboard`, eliminating the need to open the app or use the Discord app's `Share Sheet`.

### Notes

-   Ensure you are the owner or have mod privileges, on the server the channel is located, to access server settings.
-   For sending multiple items, enable **Allow Sharing Large Amounts of Data** in your device's settings (_Settings > Shortcuts > Advanced_).
-   Exceeding max file upload size? Compress files or provide a hyperlink.

## Benefits

-   Copy/paste content from your device to a PC (_non-MacBook users' favorite!_).
-   Bypass Discord's auto-conversion/compression for images/videos.
-   Store text & files for future reference.
-   Send code blocks with syntax highlighting.
-   Integrate with automations!
    -   Send memes regularly, using the **Time of Day** automation.
    -   Let your friends know you're getting big at the gym, using the **Arrive** automation.
    -   Forward messages from iMessage, using the **Message** automation.

## Prerequisites

A [Discord](https://discord.com/) account.

## Getting Started

### Step 1: On Your PC

1. Navigate to **Server Settings > Integrations > Webhooks**.
2. Click **New Webhook**.
3. Select the channel and customize the webhook.
4. Click **Copy Webhook URL** and send the webhook URL to your device.

### Step 2: On Your Device

1. Download this shortcut and follow the setup (_refer to [Settings](#settings) for details_).
2. Tap **Done**.

## Settings

Configure the following settings to your preferences.

1. **Webhook URL**: Direct link for content upload (_refer to [Getting Started](#getting-started) for details_).
2. **Character Limit**: Max # of characters per message.
    - Default: **2000**
    - Discord Nitro: **4000**
    - If the character limit is exceeded, it's uploaded as a **.txt** file instead.
3. **Max File Size**: Max file size (_in MB_) per message.
    - Default: **25**
    - Discord Nitro Basic: **50** | Discord Nitro: **500**
4. **Preserve Images**: Preserve image format and metadata.
    - Default: **False**
        - Images are converted to **.jpeg** and metadata is removed.
        - To guarantee images are embeddable on Discord, leave this setting on default.
5. **Preserve Videos**: Preserve video format and metadata.
    - Default: **False**
        - Videos are re-encoded to **H.264** and metadata is removed. Videos smaller than 4K will not be downscaled.
        - To guarantee videos are embeddable on Discord, leave this setting on default.
            - _Except not all video extensions are not embeddable on Discord: [Source #1](https://www.reddit.com/r/discordapp/comments/f2kt5r/guide_file_formats_discord_can_embed/) & [Source #2](https://www.reddit.com/r/discordapp/comments/rtbv2g/embedded_videos_formats_list/)_
6. **Send Text As Code**: Send text as a code block, with syntax highlighting.
    - Default: **False**

### Change Settings

Follow these steps to change the above settings at any time.

1. Edit the shortcut (_by tapping the three dots in the upper right_).
2. Scroll down to the **Settings** section.
3. Adjust values in the _Dictionary_ object.

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

_As a general warning, Discord is not a safe place to store sensitive or identifying information. Please do not send passwords, addresses, or sensitive information to your Discord server. But it is safe to use this shortcut if you want to send content that is not sensitive or identifying to you._

## Credits

-   Banner created with [MediaKit](https://routinehub.co/shortcut/1911).
-   Inspired by Apple's [Email Myself](https://www.icloud.com/shortcuts/dd6a0881316f478b951b2ef72c8a0d58) shortcut.
