// Fetch the 'status' div element
const statusDiv = document.getElementById('status');

// Update the status display
function updateUI(isEnabled) {
  statusDiv.textContent = `Status: ${isEnabled ? 'Enabled' : 'Disabled'}`;
}

// Fetch and display the current status of Skipper when the popup is opened
chrome.storage.local.get(['isSkipperEnabled'], function(result) {
  updateUI(result.isSkipperEnabled);
});
