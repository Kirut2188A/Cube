const randomGibberishElement = document.getElementById('random-gibberish');

function getRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?';
  return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomColor() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33F5', '#33FFF5', '#F5FF33'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateRandomGibberish() {
  const randomText = Array.from({ length: 10 }, () => getRandomCharacter()).join('');
  const randomColor = getRandomColor();
  randomGibberishElement.textContent = randomText;
  randomGibberishElement.style.color = randomColor;
}

setInterval(updateRandomGibberish, 300);
updateRandomGibberish();
