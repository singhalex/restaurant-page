const navBar = document.createElement('ul');
navBar.setAttribute('id', 'nav-bar');

const home = document.createElement('li');
home.textContent = 'Home';

const menu = document.createElement('li');
menu.textContent = 'Menu';

const contact = document.createElement('li');
contact.textContent = 'Contact';

export default function createNavBar() {
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  document.body.appendChild(navBar);
}
