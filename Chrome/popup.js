// Get all the tab buttons and tab content divs
var tablinks = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tabcontent");

// Hide all tab content divs initially
for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// Attach a click event listener to each tab button
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function() {
        // Remove the active class from all tab buttons
        for (var j = 0; j < tablinks.length; j++) {
            tablinks[j].className = tablinks[j].className.replace(" active", "");
        }

        // Hide all tab content divs
        for (var j = 0; j < tabcontent.length; j++) {
            tabcontent[j].style.display = "none";
        }

        // Show the content div that corresponds to the clicked tab
        document.getElementById(this.id.replace("btn-", "")).style.display = "block";

        // Add the active class to the clicked tab button
        this.className += " active";
    });
}

// Show the first tab content div and add the active class to the first tab button by default
if (tabcontent[0]) {
    tabcontent[0].style.display = "block";
}
if (tablinks[0]) {
    tablinks[0].className += " active";
}
