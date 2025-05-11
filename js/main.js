function searchContent() {
  const input = document.getElementById('search-bar').value.toLowerCase();
  const paragraphs = document.querySelectorAll('#content p');

  paragraphs.forEach(p => {
    const text = p.textContent.toLowerCase();
    p.style.display = text.includes(input) ? 'block' : 'none';
  });
}