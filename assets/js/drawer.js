const toggleButton = document.getElementById('menu-toggle');
const drawer = document.getElementById('side-drawer');
toggleButton.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
