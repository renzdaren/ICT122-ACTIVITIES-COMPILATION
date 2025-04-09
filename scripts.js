<script>
    // Get the current file from the URL
    const currentFile = window.location.pathname.split('/').pop();
    const fileNumber = parseInt(currentFile);

    // Ensure the file number is valid
    if (!isNaN(fileNumber)) {
        // Create a navigation wrapper for the arrow buttons
        const navWrapper = document.createElement('div');
        navWrapper.className = 'arrow-buttons';
        navWrapper.style.display = "flex";
        navWrapper.style.justifyContent = "space-between";
        navWrapper.style.marginTop = "40px";

        // Add previous button if the current file number is greater than 1
        if (fileNumber > 1) {
            const prevBtn = createArrowButton(`${fileNumber - 1}.html`, "&#8592;"); // ← arrow
            navWrapper.appendChild(prevBtn);
        } else {
            // Add a spacer to keep spacing consistent
            const spacer = document.createElement('div');
            navWrapper.appendChild(spacer);
        }

        // Add next button if the current file number is less than 50
        if (fileNumber < 50) {
            const nextBtn = createArrowButton(`${fileNumber + 1}.html`, "&#8594;"); // → arrow
            navWrapper.appendChild(nextBtn);
        }

        // Append the navigation wrapper to the content area
        const contentArea = document.querySelector('.activity-content');
        if (contentArea) {
            contentArea.appendChild(navWrapper);
        }

        /**
         * Creates a styled arrow button.
         * @param {string} href - The URL the button should link to.
         * @param {string} arrow - The HTML entity for the arrow symbol.
         * @returns {HTMLAnchorElement} - The styled arrow button element.
         */
        function createArrowButton(href, arrow) {
            const btn = document.createElement('a');
            btn.href = href;
            btn.innerHTML = arrow;
            styleArrow(btn);
            return btn;
        }

        /**
         * Styles the arrow button.
         * @param {HTMLAnchorElement} btn - The button element to style.
         */
        function styleArrow(btn) {
            btn.style.textDecoration = "none";
            btn.style.fontSize = "30px";
            btn.style.backgroundColor = "#4CAF50"; // Updated color for a modern feel
            btn.style.color = "#fff"; // White text for better contrast
            btn.style.padding = "10px";
            btn.style.border = "none"; // Removed border for a cleaner look
            btn.style.borderRadius = "50%";
            btn.style.transition = "background 0.3s, transform 0.3s";
            btn.style.display = "flex";
            btn.style.alignItems = "center";
            btn.style.justifyContent = "center";
            btn.style.width = "60px";
            btn.style.height = "60px";
            btn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

            // Add hover effect
            btn.addEventListener('mouseover', () => {
                btn.style.backgroundColor = "#45a049"; // Slightly darker green
                btn.style.transform = "scale(1.1)"; // Slight zoom-in
            });

            btn.addEventListener('mouseout', () => {
                btn.style.backgroundColor = "#4CAF50"; // Revert to original color
                btn.style.transform = "scale(1)"; // Revert to original size
            });
        }
    }
</script>