# Skipper

![Alt text](/SkipperBanner.png "Title")

Do you listen to passive audio on YouTube, like podcasts? 

Do you commonly have videos on in the background while you do other things?

Do you deal with constant interruptions from advertisements that are 5 minutes long and feature some guy trying to sell you on their get-rich-quick courses that require you to manually skip them after 5 seconds because the thought of paying for a YouTube Premium subscription gives you a nostalgia driven exestential crisis? 

Skipper might be for you.

Other extensions are a mess! Some hide basic functionality behind a paywall, most aren't open source and the few that are open-source use a suspiciously large amount of files or have been been abandoned for the last 5 years and are now outdated. Skipper can be deployed using under 45 lines of code contained in a .js file, a .json file (and some icons)

<h1>What is Skipper?</h1>

Skipper is an open-source and creator friendlybrowser extension that automatically skips ads on YouTube when the 'skip ad' button is present.

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
