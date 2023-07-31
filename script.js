const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;
let currentScale = 1.0;

cube.addEventListener('mousedown', startDragging);
cube.addEventListener('touchstart', startDragging);

document.addEventListener('mousemove', rotateCube);
document.addEventListener('touchmove', rotateCube);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

document.addEventListener('wheel', zoomCube);

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

  cube.style.transform = `rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg) scale(${currentScale})`;
}

function stopDragging() {
  isDragging = false;
}

function zoomCube(e) {
  e.preventDefault();
  const scaleFactor = 0.01;
  const delta = e.deltaY > 0 ? -1 : 1;
  currentScale += delta * scaleFactor;

  // Limit the scale to a reasonable range
  currentScale = Math.min(Math.max(currentScale, 0.5), 2.0);

  cube.style.transform = `rotateX(0) rotateY(0) scale(${currentScale})`;
}

function getEventX(event) {
  return event.clientX || event.touches[0].clientX;
}

function getEventY(event) {
  return event.clientY || event.touches[0].clientY;
}
