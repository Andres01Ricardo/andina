const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menuweb');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});


