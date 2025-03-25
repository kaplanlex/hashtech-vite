const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

const toggleMenu = (event) => {
  nav.classList.toggle('open');
  event.stopPropagation();
};

const closeMenu = (event) => {
  if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
    nav.classList.remove('open');
  }
};

menuBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);
