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

Skipper was created as a personal solution after I was unable to find a solution that I felt comfortable with.

Every solution I was able to find had one or multiple of the following issues:

* They're ad-blockers! This takes ad revenue from creators and is directly against the YouTube Terms of Service agreement.

**YouTube has clearly stated that using ad-blockers on YouTube could lead to your account being banned**

This is *especially* true after the release of YouTube's ad-free upgrade "YouTube Premium". 

Skipper *does not* have this risk, as Skipper is an accesiblity tool that does not violate YouTube's Terms of Serivce.

* Hiding basic functionality behind a paywall.

* Non-credible developers that do not provide additonal cedibility through legitimate and traceable branding or transparency through open-source code.

* Poor online reviews.

* General lack of support/functionality.

* They're open-source projects but they use a suspiciously large amount of files and code, while Skipper can be deployed using 3 .png images and approx. 45 lines of code contained in a single .js file and a .json file.

<h1>Check out the demo</h1>

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

<h1>Import Skipper as a browser extension</h1>

1.
2.
3.
4.
5.
