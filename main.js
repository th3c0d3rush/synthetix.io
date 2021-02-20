const hamburgerMenu = document.querySelector('.Header__StyleHamburgerMenu');
let isMenuOpen = false;
hamburgerMenu.addEventListener('click', () => {
  if(!isMenuOpen) {
    hamburgerMenu.classList.add('open');
    isMenuOpen = true;    
  } else {
    hamburgerMenu.classList.remove('open');
    isMenuOpen = false;
  }
});