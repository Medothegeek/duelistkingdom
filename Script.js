fetch('data.json') // Make sure the JSON file is in the same directory as your HTML file
  .then(response => response.json())
  .then(data => populateTable(data.duels))
  .catch(error => console.error('Error loading JSON:', error));

function populateTable(duels) {
  const tableBody = document.querySelector('#duelTable tbody');
  duels.forEach(duel => {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${duel.player1}</td>
      <td>${duel.player2}</td>
      <td>${duel.winner}</td>
      <td>${generateStars(duel.player1Stars)}</td>
      <td>${generateStars(duel.player2Stars)}</td>
      <td class='replay-links'>${duel.replays.map((link, i) => `<a href='${link}' target='_blank'>Duel ${i + 1}</a>`).join(' ')}</td>
    `;
  });
}

function generateStars(count) {
  let stars = '';
  for (let i = 0; i < count; i++) {
    stars += '<img src="star.png" alt="star"> ';
  }
  return stars;
}
