function classToggle() {
  const navs = document.querySelectorAll('.navBar-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.navBar-link-toggle')
  .addEventListener('click', classToggle);