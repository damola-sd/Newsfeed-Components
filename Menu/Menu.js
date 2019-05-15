
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu;
menu = document.querySelector('.menu');
menu.display.style.color = 'red';
// create a reference to the ".menu-button" class
const menuButton;
menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => toggleMenu);