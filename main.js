const hamburgerMenu = document.querySelector('.Header__StyleHamburgerMenu');
const Menu = document.querySelector('.Menu');

let isMenuOpen = false;
hamburgerMenu.addEventListener('click', () => {
  if(!isMenuOpen) {
    hamburgerMenu.classList.add('open');
    isMenuOpen = true;    
    Menu.classList.add('open');
  } else {
    hamburgerMenu.classList.remove('open');
    isMenuOpen = false;
    Menu.classList.remove('open');
  }
});