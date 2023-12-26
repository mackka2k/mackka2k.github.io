// script.js
document.addEventListener("DOMContentLoaded", function () {
	// Get the current file name from the URL
	var currentFile = window.location.pathname.split("/").pop();

	// Function to set the color based on the current file
	function setAsideTextColor() {
			var asideSection = document.getElementById("aside-section");

			// Check the current file name and set the color accordingly
			switch (currentFile) {
					case "html_css_page.html":
							asideSection.style.color = "red"; // Set the color for HTML/CSS page
							break;
					// Add more cases for other pages if needed
					default:
							// Set a default color or remove this block if you don't want a default color
							asideSection.style.color = "black";
			}
	}

	// Call the function to set the color when the page loads
	setAsideTextColor();
});
