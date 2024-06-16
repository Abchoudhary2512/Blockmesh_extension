const level = require('level');
const path = require('path');
const os = require('os');

// Function to find Chrome extension LevelDB path
function findExtensionPath() {
    let chromeProfilePath;
    if (os.platform() === 'win32') {
        chromeProfilePath = path.join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'User Data', 'Default', 'Local Extension Settings');
    } else if (os.platform() === 'darwin') {
        chromeProfilePath = path.join(os.homedir(), 'Library', 'Application Support', 'Google', 'Chrome', 'Default', 'Local Extension Settings');
    } else {
        chromeProfilePath = path.join(os.homedir(), '.config', 'google-chrome', 'Default', 'Local Extension Settings');
    }

    return chromeProfilePath;
}

async function fetchData(dbPath) {
    const db = level(dbPath, { valueEncoding: 'json' });

    db.createReadStream()
        .on('data', ({ key, value }) => {
            console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);
        })
        .on('error', (err) => {
            console.error('Error reading data:', err);
        })
        .on('close', () => {
            console.log('Stream closed');
        })
        .on('end', () => {
            console.log('Stream ended');
        });
}

const extensionPath = findExtensionPath();
if (!extensionPath) {
    console.error('Extension path not found');
    process.exit(1);
}

console.log(`Extension path: ${extensionPath}`);
// Replace 'YOUR_EXTENSION_ID' with your actual extension ID
const dbPath = path.join(extensionPath, 'YOUR_EXTENSION_ID');
fetchData(dbPath);
