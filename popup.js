// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.getElementById('status');
    const toggleButton = document.getElementById('toggle');
    
    // Fetch the 'enabled' value from storage
    chrome.storage.sync.get('enabled', function(data) {
        const enabled = data.enabled;
        updateUI(enabled);
    });

    // Attach a click event listener to the button
    toggleButton.addEventListener('click', function() {
        // Fetch the 'enabled' value from storage
        chrome.storage.sync.get('enabled', function(data) {
            const enabled = data.enabled;
            // Update the 'enabled' value in storage
            chrome.storage.sync.set({enabled: !enabled}, function() {
                updateUI(!enabled);
            });
        });
    });

    // Function to update the UI
    function updateUI(enabled) {
        if (enabled) {
            statusDiv.textContent = 'Status: Enabled';
            toggleButton.textContent = 'Disable';
        } else {
            statusDiv.textContent = 'Status: Disabled';
            toggleButton.textContent = 'Enable';
        }
    }
});
