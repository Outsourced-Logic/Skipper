// Get tab buttons
const optionsButton = document.getElementById('btn-options');
const siteListButton = document.getElementById('btn-site-list');
const moreButton = document.getElementById('btn-more');

// Set up event listeners
optionsButton.addEventListener('click', () => openTab('Options'));
siteListButton.addEventListener('click', () => openTab('SiteList'));
moreButton.addEventListener('click', () => openTab('More'));

// Tab switching function
function openTab(tabName) {
    var i, tabcontent, tablinks;
    // Hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the "active" class from all elements with class="tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab and add the "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(`btn-${tabName.toLowerCase()}`).className += " active";
}

// Start with the 'Options' tab open
openTab('Options');
