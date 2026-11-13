const viewer = document.querySelector('.image-viewer');
const expandedImage = viewer?.querySelector('img');
if (viewer && expandedImage && typeof viewer.showModal === 'function') {
  document.querySelectorAll('.screenshot-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      expandedImage.src = link.href;
      expandedImage.alt = link.querySelector('img').alt;
      viewer.showModal();
    });
  });
  viewer.addEventListener('click', event => {
    const bounds = viewer.getBoundingClientRect();
    if (event.target === viewer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) viewer.close();
  });
}
