// Wrap the entire script inside an immediately-invoked function expression (IIFE) to avoid polluting the global scope
(() => {
  // Initial state
  chrome.storage.local.set({ isSkipperEnabled: true });

  // Add an event listener for when a tab is updated
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the update is complete and the tab URL includes 'https://www.youtube.com/'
    chrome.storage.local.get(['isSkipperEnabled'], function(result) {
      if (
        result.isSkipperEnabled &&
        changeInfo.status === 'complete' &&
        tab.url &&
        tab.url.includes('https://www.youtube.com/')
      ) {
        // Execute a script in the updated tab
        chrome.scripting.executeScript(
          {
            target: { tabId },
            func: function () {
              // Rest of the code...
            },
          },
          () => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
            }
          }
        );
      }
    });
  });
})();
