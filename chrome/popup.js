document.getElementById('getValue').addEventListener('click', () => {
    chrome.storage.local.get(['greeting'], (result) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
        }
        document.getElementById('output').innerText = 'Stored Value: ' + result.greeting;
    });
});
