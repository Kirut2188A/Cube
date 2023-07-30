const cube = document.getElementById('cube');
let isDragging = false;
let previousX, previousY;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - previousX;
  const deltaY = e.clientY - previousY;
  previousX = e.clientX;
  previousY = e.clientY;
  cube.style.transform = `rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg) ${cube.style.transform}`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
