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

    if (!found && input.trim() !== "") {
        alert("No animals matched your search.");
    }
}