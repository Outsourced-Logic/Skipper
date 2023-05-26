document.addEventListener('DOMContentLoaded', function() {
    var tablinks = document.getElementsByClassName("tablinks");
    var tabcontent = document.getElementsByClassName("tabcontent");

    function switchTab() {
        // Hide all tab content divs
        for (var j = 0; j < tabcontent.length; j++) {
            tabcontent[j].style.display = "none";
        }

        // Remove the active class from all tab buttons
        for (var j = 0; j < tablinks.length; j++) {
            tablinks[j].className = tablinks[j].className.replace(" active", "");
        }

        // Show the content div that corresponds to the clicked tab
        document.getElementById(this.id.replace("btn-", "")).style.display = "block";

        // Add the active class to the clicked tab button
        this.className += " active";
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", switchTab);
    }

    // Show the first tab content div and add the active class to the first tab button by default
    if (tabcontent[0]) {
        tabcontent[0].style.display = "block";
    }
    if (tablinks[0]) {
        tablinks[0].className += " active";
    }
}, false);
