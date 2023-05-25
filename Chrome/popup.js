// Fetch the 'status' div and 'toggle' button elements
const statusDiv = document.getElementById('status');
const toggleButton = document.getElementById('toggle');

// Update the status display and the toggle button text
function updateUI(isEnabled) {
  statusDiv.textContent = `Status: ${isEnabled ? 'Enabled' : 'Disabled'}`;
  toggleButton.textContent = `${isEnabled ? 'Disable' : 'Enable'}`;
}

// Fetch and display the current status of Skipper when the popup is opened
chrome.storage.local.get(['isSkipperEnabled'], function(result) {
  updateUI(result.isSkipperEnabled);
});
