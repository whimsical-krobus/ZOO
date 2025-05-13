/* This JS program enables the search functionality for the seach bar on the webpage. */

// Custom function for the search:
function searchContent() {
    const input = document.getElementById('search-bar').value.toLowerCase(); // This gets the value entered in the input field with the ID search-bar and it converts the text to lowercase so the search is case-insensitive.
    const animals = document.querySelectorAll('.animal'); // This selects all elements with the class animal, it's these elements the function will check for matches.
    let found = false; // A flag variable called 'found' is initialized to keep track of whether any matching element is found.

    animals.forEach(animal => { // Loops through every animal.
        const text = animal.textContent.toLowerCase(); // Gets its textContent and converts it to lowercase.
        const match = text.includes(input); // Checks whether the textContent includes the input from the search bar.
        animal.style.display = match ? 'block' : 'none'; // If it matches the block element is displayed and if it doesn't then it's hidden.
        if (match) found = true; // If at least one match is found, found is set to true.
    });

    // This part uses the alert function wrapped in an if statement to display a pop-up box with a message if the users search result doesn't have a match.
    if (!found && input.trim() !== "") {
        alert("No animals matched your search.");
    }
}