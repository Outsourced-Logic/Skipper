document.addEventListener('DOMContentLoaded', function() {
    var tablinks = document.getElementsByClassName("tablinks");
    var tabcontent = document.getElementsByClassName("tabcontent");

    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function() {
            for (var j = 0; j < tablinks.length; j++) {
                tablinks[j].className = tablinks[j].className.replace(" active", "");
            }

            for (var j = 0; j < tabcontent.length; j++) {
                tabcontent[j].style.display = "none";
            }

            document.getElementById(this.id.replace("btn-", "")).style.display = "block";
            this.className += " active";
        });
    }

    if (tabcontent[0]) {
        tabcontent[0].style.display = "block";
    }
    if (tablinks[0]) {
        tablinks[0].className += " active";
    }
}, false);
