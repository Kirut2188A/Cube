const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;

cube.addEventListener('mousedown', startDragging);
cube.addEventListener('touchstart', startDragging);

document.addEventListener('mousemove', rotateCube);
document.addEventListener('touchmove', rotateCube);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

cube.addEventListener('click', (event) => {
  const sideClicked = getClickedSide(event);
  const details = getDetails(sideClicked);

  if (details) {
    alert(details);
  }
});

function startDragging(e) {
  isDragging = true;
  previousX = getEventX(e);
  previousY = getEventY(e);
}

function rotateCube(e) {
  if (!isDragging) return;

  const currentX = getEventX(e);
  const currentY = getEventY(e);

  const deltaX = currentX - previousX;
  const deltaY = currentY - previousY;

  previousX = currentX;
  previousY = currentY;

  cube.style.transform = `rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg) ${cube.style.transform}`;
}

function stopDragging() {
  isDragging = false;
}

function getEventX(event) {
  return event.clientX || event.touches[0].clientX;
}

function getEventY(event) {
  return event.clientY || event.touches[0].clientY;
}

function getClickedSide(event) {
  const sideClicked = event.target.textContent.trim();
  return sideClicked;
}

function getDetails(side) {
  switch (side) {
    case 'TETHEROUS':
      return 'Hi! I am Tetherous. Welcome to my minimalistic website!';
    case 'GitHub':
      return 'Check out my GitHub profile at https://github.com/Kirut2188A';
    case 'Discord: tetherous':
      return 'You can find me on Discord with the username "tetherous"';
    case 'Random Gibberish':
      return 'This side contains random gibberish text that changes every 300 milliseconds';
    case 'Instagram: ballsinnit':
      return 'Follow me on Instagram with the username "ballsinnit"';
    case 'Word Guessing Game':
      return 'The Word Guessing Game is a fun project available on my GitHub. Try it out!';
    default:
      return null;
  }
}
