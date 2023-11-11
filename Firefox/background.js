// Add an event listener for when a tab is updated
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Check if the update is complete and the tab URL includes 'https://www.youtube.com/'
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('https://www.youtube.com/')) {
        // Execute a script in the updated tab
        chrome.tabs.executeScript(tabId, {code: `if (!window.myExtensionScriptInjected) {
            // Set a flag to indicate that the script has been injected
            window.myExtensionScriptInjected = true;

            // Define a function to click an element
            function clickElement() {
                // Try to find the new 'Skip Ad' button
                var newElement = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
                // Try to find the original 'Skip Ad' button
                var originalElement = document.querySelector('.ytp-ad-skip-button.ytp-button');

                // Determine which element is visible and click it
                var elementToClick = newElement && newElement.offsetParent !== null ? newElement : 
                                     originalElement && originalElement.offsetParent !== null ? originalElement : 
                                     null;

                if (elementToClick) {
                    // Click the visible element
                    elementToClick.click();
                } else {
                    // Log a message if neither element is found
                    console.log("Skipper is searching The Seven Seas for the 'Skip' button ⛵");
                }
            }

            // Call the clickElement function every 1000 milliseconds
            setInterval(clickElement, 1000);
        }`});
    }
});
