function searchContent() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const animalCards = document.querySelectorAll('.animal');

    animalCards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = 'block'; // Show card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });
}