const sidePanel = document.getElementById("side-panel");
        const toggleButton = document.getElementById("toggle-btn");

        toggleButton.addEventListener("click", function() {
            // Toggle the 'collapsed' class
            sidePanel.classList.toggle("collapsed");

            // Update the arrow direction based on the panel state
            if (sidePanel.classList.contains("collapsed")) {
                toggleButton.innerHTML = "&#x25C0;"; // Left arrow when collapsed
            } else {
                toggleButton.innerHTML = "&#x25B6;"; // Right arrow when expanded
            }
        });