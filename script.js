const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;

cube.addEventListener('mousedown', startDragging);
cube.addEventListener('touchstart', startDragging);

document.addEventListener('mousemove', rotateCube);
document.addEventListener('touchmove', rotateCube);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

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
