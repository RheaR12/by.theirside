const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-mobile-nav');

mobileBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

