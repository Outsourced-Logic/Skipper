# Skipper

![Alt text](images/SkipperBanner.png "Title")

<h1>Developer notes</h1>

This is my first Github project and a majority of the code was generated with guidance from GPT-4 as a personal learning exercise. 
If this repository or my code is not properly optimized, feel free to log an issue recommending changes.

<h1>What is Skipper?</h1>

Skipper is an open-source and creator-friendly browser extension that automatically interacts with 'skip ad' buttons when they are present on a website. This enhances accessibility on platforms like YouTube by allowing users 

Skipper is not designed, intended, or marketed as an ad-blocker or ad-avoidance tool of any kind. 

In the future, we plan to increase our website support and add additonal accessiblity features to Skipper; this is just the start!

<h1>Why Skipper?</h1>

Skipper was created as a personal solution after I was unable to find an ad-management extension that I felt comfortable using. Skipper is designed to address several common issues with existing solutions:

<h3>Supports creators</h3>

Unlike ad-blockers that take ad revenue from creators and violate the YouTube Terms of Service, Skipper is an accessibility tool that interacts with websites using your browser's built-in features, the same way a normal user would. This ensures that both YouTube and creators are not negatively impacted.

<h3>Free and open-source</h3>

Skipper is committed to always being open-source and having a fully functional free version. This eliminates concerns related to handling of payment information, the safety of software downloads, and the functionality of the extension before downloading.

<h3>Reliability and support</h3>

Skipper is designed with reliability in mind and has been privately tested for over 100 hours before public release. Our small team of beta testers continues to evaluate its performance daily. We strive to address user concerns and provide timely support.

<h3>No unnecessary complexity</h3>

Skipper avoids suspiciously large files and outdated code often found in other open-source extensions. It doesn't require complicated setup or additional third-party downloads.

<h1>Check out the demo</h1>

To demo Skipper before downloading, follow these steps:

1. Open up a Firefox or Chrome browser window
2. Navigate to Youtube
3. Press CTRL+SHIFT+J or F12 to open the browser's developer console
4. Copy the demo script below
5. Paste the script into the console
6. Press enter
7. Close the console with F12 or with the little 'x' below the top right corner
8. Play any video
9. Skipper will now search The Seven Seas for the skip button.

Note: The Skipper demo will usually stop running when you navigate away from the page that the script was launched on; this is a limitation of the demo and will not occur with the downloaded extension, as Chrome Developer Console does not have built-in memory between sessions. If the Skipper Demo stops working, simply open the developer console and input the script provided above.

<h3> Demo script </h3>

<pre>

function clickElement() {
    var element = document.querySelector(".ytp-ad-skip-button.ytp-button");
    if (element && element.offsetParent !== null) {
        element.click();
    } else {
        console.log("Skipper is automating the ad-skipping process");
    }
}

setInterval(clickElement, 1000); // run the clickElement function every 1000 milliseconds (1 seconds)

</pre>

<h1>Import Skipper as a personal Chrome extension</h1>

1. Download the latest Chrome release of Skipper
2. Unzip the file
3. Navigate to the extension management screen of your browser (chrome://extensions/)
4. Click 'Load unpacked'
5. Select the unzipped 'Skipper' file

Skipper is now ready to enhance your browsing experience.

<h1>Import Skipper as a temporary Firefox extension</h1>

1. Download the latest Firefox release of Skipper
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
11. Enjoy videos while minimizing interruptions and unnecessary manual interaction with your device

Skipper is now ready to enhance your browsing experience.

<h1>Disclaimer: Skipper is NOT an Ad-Blocker</h1>

Please be advised that Skipper, the browser extension discussed on this website, is not designed, intended, or marketed as an ad-blocker or ad-avoidance tool of any kind. Skipper's primary goal is to enhance the user experience and accessibility of online content by filling a gap not met by common accesibility software, without negatively impacting the creators or platforms involved. It does not prevent advertisements from being displayed, nor does it bypass or interfere with the advertising systems employed by websites or platforms. Instead, it automates the process of skipping ads at the users request, when users have the option to do so, much like a regular user of the platform would.

By using Skipper, users acknowledge and agree that they understand the purpose and functionality of the extension, and that they will not use it for any purpose that is in violation of the terms of service of the websites or platforms they visit.

Users are solely responsible for their use of Skipper and any consequences that may arise from the use of the extension. By using Skipper, users agree to indemnify and hold harmless the developers, contributors, and any affiliated parties from any claims, damages, or other liabilities arising from the use or misuse of the extension.

Please ensure that you use Skipper responsibly and in accordance with the terms and conditions of the websites or platforms you visit.
