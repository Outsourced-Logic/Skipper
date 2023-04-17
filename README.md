# Skipper

![Alt text](images/SkipperBanner.png "Title")

<h1>Developer notes</h1>
This is my first Github project and a majority of the code was generated with guidance from GPT-4 as a personal learning exercise. 

If this repository or my code is not properly optimized, feel free to log an issue recommending changes.

<h1>What is Skipper?</h1>

Skipper is an open-source and creator-friendly browser extension that automatically skips ads on YouTube when the 'skip ad' button is present.

Do you listen to passive audio on YouTube, like podcasts or streams? 

Do you commonly have videos on in the background?

Are you tired of dealing with constant interruptions from advertisements that are up to 10 minutes long and require you to manually skip them?

Skipper might be for you.

<h1>Why Skipper?</h1>

Skipper was created as a personal solution after I was unable to find an ad-management extension that I felt comfortable using.

Every solution I was able to find had one or multiple of the following issues:

* **They're ad-blockers!**

   This takes ad revenue from creators and is against the YouTube Terms of Service agreement.

    Skipper is an accessibility tool that uses your browser's built-in features to interact with websites the same way that a normal user would. This ensures that both YouTube and creators are not impacted.

* **Hiding basic functionality behind a paywall.**

    When looking through the available extensions, I discovered a trend of developers putting low-quality extensions behind paywalls and UI that displays pointless metrics; many of these projects appeared to be abandoned.
    
    Additionally, it's not clear how these extensions handle your payment information, if the software is safe to download, and if the extension is functional, before downloading potentially malicious files.
    
    Skipper will *always* be open-source and will *always* have a fully functional free version, although it is highly likely that Skipper will never have a paid version, as monetizing this project may prove to be a headache. 

* **Poor online review due to a general lack of support/functionality.**

    Many extensions have a significant history of reviews complaining about inconsistent functionality with limited responses from the developer.

    Skipper is designed with reliability in mind and has been tested privately for over 100 hours before being released publically and it continues to be tested every day by our small team of beta testers.
    
* **Unreliable options**
    
    Many of the other open-source extensions available commonly use a suspiciously large amount of files and code, are outdated, or require complicated setup and additional 3rd party downloads such as Selenium Web Driver.
    
<h1>Check out the demo</h1>

This script displayed in the code block below is the heart of Skipper! If you'd like to demo it before downloading, just follow these steps:

1. Open up a Firefox or Chrome browser window
2. Navigate to Youtube
3. Press CTRL+SHIFT+J or F12 to open the browser's developer console
4. Copy the demo script below
5. Paste the script into the console
6. Press enter
7. Close the console with F12 or with the little 'x' below the top right corner
8. Play any video
9. Skipper will now search The Seven Seas for the skip button.

Note: The Skipper demo will usually stop running when the user navigates away from the page that the script was launched on; this is a limitation of the demo and will not occur with the downloaded extension, as Chrome Developer Console does not have built-in memory between sessions. If the Skipper Demo stops working, simply open the developer console and input the script provided above.

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

<h1>Import Skipper as a personal Chrome extension</h1>

1. Download the latest Skipper release
2. Unzip the file into a new folder titled 'Skipper'
3. Navigate to the extension management screen of your browser (chrome://extensions/)
4. Click 'Load unpacked'
5. Select the unzipped 'Skipper' file

Skipper is now ready to search The Seven Seas for troublesome features.

<h1>Import Skipper as a temporary Firefox extension</h1>

1. Download the Firefox version of Skipper
2. Unzip the file
3. Open your Firefox browser
4. Copy and paste "about:debugging#/runtime/this-firefox" into your URL search bar
5. Click the "Load Temporary Add-on" button on the top right side of the screen
6. Use the pop-up file browser to locate the unzipped Skipper folder that was downloaded in Step 1
7. Click through the folder and locate the file named "manifest.json"
8. Click "manifest.json" and click "open"
9. Skipper is now imported into Firefox
10. Navigate to YouTube or another supported website
11. Enjoy videos while avoiding unnecessary manual interaction with your device

Skipper is now ready to search The Seven Seas for troublesome features.
