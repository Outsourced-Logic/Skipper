# Skipper

![Alt text](/SkipperBanner.png "Title")

<h1>What is Skipper?</h1>

Skipper is an open-source and creator friendly browser extension that automatically skips ads on YouTube when the 'skip ad' button is present.

<h1>How does it work?</h1>

This script displayed in the code block below is the heart of Skipper! If you'd like to demo it before downloading, just follow these steps:

1. Open up a Firefox or Chrome browser window
2. Navigate to Youtube
3. Press CTRL+SHIFT+J to open the developer console
4. Copy the demo script below
5. Paste into the console
6. Press enter
7. Close the console with F12 or with the little 'x' below the top right corner
7. Play any video
8. Skipper will now search The Seven Seas for the skip button.

<h3> Demo script </h3>

<pre>

function clickElement() {
    var element = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (element && element.offsetParent !== null) {
        element.click();
    } else {
        console.log("Skipper is searching The Seven Seas for the 'Skip' button");
    }
}

setInterval(clickElement, 1000); // run the clickElement function every 1000 milliseconds (1 seconds)

</pre>
