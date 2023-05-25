document.addEventListener('DOMContentLoaded', () => {
  const tablinks = document.getElementsByClassName("tablinks");

  // Tab switching function
  const openTab = (tabName) => {
    var i, tabcontent;

    // Hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the current tab
    document.getElementById(tabName).style.display = "block";
  }

  // Event listeners for tab buttons
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener('click', function() {
      // Remove active class from other tabs
      for (let j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace(" active", "");
      }
      // Add active class to clicked tab and open it
      this.className += " active";
      openTab(this.id.split('-')[1]);
    });
  }

  // Open the 'Options' tab by default
  document.getElementById('btn-options').click();
});
