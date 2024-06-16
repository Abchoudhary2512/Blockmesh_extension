# Hello World Chrome Extension

## Overview

This project consists of a simple Chrome extension that stores a value using the `chrome.storage` API and a Node.js script to fetch that value from the local LevelDB database on disk.


## Chrome Extension

### Files

- **manifest.json**: Defines the extension and its permissions.
- **background.js**: Initializes the stored value in `chrome.storage.local`.
- **popup.html**: The HTML for the extension's popup interface.
- **popup.js**: JavaScript to handle fetching and displaying the stored value in the popup.

### Installation

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click "Load unpacked" and select the `chrome_extension` directory from this project.

### Usage

1. Click the extension icon in the Chrome toolbar.
2. In the popup, click the "Get Stored Value" button.
3. The value stored in `chrome.storage.local` will be displayed below the button.

## LevelDB Fetch Script

### Files

- **fetch_data.js**: Node.js script to fetch data from the LevelDB database used by the Chrome extension.
- **package.json**: Defines the Node.js dependencies and scripts.


### Successful output
- Extension path: <path_to_your_extension>
- Key: greeting, Value: "Hello, World!"
- Stream closed
- Stream ended


