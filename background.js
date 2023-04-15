chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('https://www.youtube.com/')) {
        chrome.tabs.executeScript(tabId, {code: `if (!window.myExtensionScriptInjected) {
            window.myExtensionScriptInjected = true;
            
            function clickElement() {
                var element = document.querySelector(".ytp-ad-skip-button.ytp-button");
                if (element && element.offsetParent !== null) {
                    element.click();
                } else {
                    console.log("Skipper is searching The Seven Seas for the 'Skip' button");
                }
            }
            
            setInterval(clickElement, 1000);
        }`});
    }
});