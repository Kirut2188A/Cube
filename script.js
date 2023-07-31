const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;
let currentScale = 1.0;
let currentRotationX = 0;
let currentRotationY = 0;

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

  currentRotationX += deltaY * 0.5;
  currentRotationY += deltaX * 0.5;

  cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${currentScale})`;
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

  cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${currentScale})`;
}

function getEventX(event) {
  return event.clientX || event.touches[0].clientX;
}

function getEventY(event) {
  return event.clientY || event.touches[0].clientY;
}
