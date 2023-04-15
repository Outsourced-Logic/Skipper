# Skipper

![Alt text](/SkipperBanner.png "Title")

<h1>What is Skipper?</h1>

Skipper is an open-source and creator friendly browser extension that automatically skips ads on YouTube when the 'skip ad' button is present.

Do you listen to passive audio on YouTube, like podcasts or streams? 

Do you commonly have videos on in the background?

Do you deal with constant interruptions from advertisements that are 5 minutes long and require you to manually skip them after 5 seconds?

Are you avoiding YouTube Premium because the thought of adding another subscription to your monthly budget gives you existential fatigue?

Skipper might be for you.

<h1>Why Skipper?</h1>

Skipper was created as a personal solution after I was unable to find a ad-management extension that I felt comfortable using.

Every solution I was able to find had one or multiple of the following issues:

* **They're ad-blockers! This takes ad revenue from creators and is directly against the YouTube Terms of Service agreement.**

    **YouTube has clearly stated that using ad-blockers on YouTube could lead to your account being banned**

    This is *especially* true after the release of YouTube's ad-free upgrade "YouTube Premium". 

    Skipper *does not* have this risk, as Skipper is an accesiblity tool that does not violate YouTube's Terms of Serivce.

* **Hiding basic functionality behind a paywall.**

    When looking through the available extensions, I discovered a trend of developers putting low quality extensions behind paywalls and UI that displays pointless         metrics, before abandoning the project. 
    
    It's not clear how these extensions handle your payment information, if the software is safe to download and if the extension is even functional, prior to             downloading potentially malicious files.
    
    Skipper will *always* be open-source and will *always* have a fully functional free version, although it is highly likely that Skipper will never have a paid           version, as monatizing this project may prove to be a headache. 

* **Poor online review due to a general lack of support/functionality.**

    Many extensions have a significant history of reviews complaining about inconsistent functionality with limited responses from the developer.

    Skipper was designed to have high-resiliency and has been tested privately for over 40 hours prior to being released publicly.
    
    Additonally, Skipper was created by a one person with the intention of using this project in future resumes. An inconsistently functional project with poor             user support doesn't scream "accountability" so please report any issues you encounter here on Github and I'll get it fixed ASAP!
    
* **Non-credible developers that do not provide additonal cedibility through legitimate and traceable branding or transparency through open-source code.**
    
    Many of the other open source extensions available commonly use a suspiciously large amount of files and code.

    Skipper can be deployed using 3 .png images for icons and approx. 45 lines of code contained in a single .js file and a .json file
    
<h1>Check out the demo</h1>

This script displayed in the code block below is the heart of Skipper! If you'd like to demo it before downloading, just follow these steps:

1. Open up a Firefox or Chrome browser window
2. Navigate to Youtube
3. Press CTRL+SHIFT+J to open the developer console
4. Copy the demo script below
5. Paste into the console
6. Press enter
7. Close the console with F12 or with the little 'x' below the top right corner
8. Play any video
9. Skipper will now search The Seven Seas for the skip button.

Note: The Skipper demo will stop running when the user navigates away from the page that the script was launched on; this is a limitation of the demo and will not occur with the downloaded extension, as Chrome Developer Console does not have built-in memory between sessions. If the Skipper Demo stops working, simply open the developer console and input the script provided above.

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

<h1>Import Skipper as a Chrome browser extension</h1>

This extension is only supported in the developer version of Firefox while we work to resolve technical issues impacting the retail version of Firefox. To use Skipper in Firefox, please refer to the demo above.

1. Download Skipper.zip
2. Unzip the file into a new folder titled 'Skipper'
3. Navigate to the extension manaegment screen of your browser (chrome://extensions/)
4. Click 'Load unpacked'
5. Select the unzipped 'Skipper' file

Skipper is now ready to search The Seven Seas for 'skip ad' buttons.
