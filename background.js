// Wrap the entire script inside an immediately-invoked function expression (IIFE) to avoid polluting the global scope
(() => {
  // Add an event listener for when a tab is updated
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the update is complete and the tab URL includes 'https://www.youtube.com/'
    if (
      changeInfo.status === 'complete' &&
      tab.url &&
      tab.url.includes('https://www.youtube.com/')
    ) {
      // Execute a script in the updated tab
      chrome.scripting.executeScript(
        {
          target: { tabId },
          func: function () {
            if (!window.myExtensionScriptInjected) {
              // Set a flag to indicate that the script has been injected
              window.myExtensionScriptInjected = true;

              // Define a function to click an element
              function clickElement() {
                // Find the 'Skip' button element
                var element = document.querySelector(
                  '.ytp-ad-skip-button.ytp-button'
                );
                // Check if the element exists and is visible
                if (element && element.offsetParent !== null) {
                  // Click the element
                  element.click();
                } else {
                  // Log a message if the element is not found
                  console.log(
                    "Skipper is searching The Seven Seas for the 'Skip' button ⛵"
                  );
                }
              }

              // Call the clickElement function every 1000 milliseconds
              setInterval(clickElement, 1000);
            }
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
})();
