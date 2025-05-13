/* This JS program */
function searchContent() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const animals = document.querySelectorAll('.animal');
    let found = false;

    animals.forEach(animal => {
        const text = animal.textContent.toLowerCase();
        const match = text.includes(input);
        animal.style.display = match ? 'block' : 'none';
        if (match) found = true;
    });

    // The following lines of code uses the alert function to display a pop-up box with a message if the users search result doesn't have a match.
    if (!found && input.trim() !== "") {
        alert("No animals matched your search.");
    }
}