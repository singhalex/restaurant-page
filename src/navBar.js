const navBar = document.createElement('ul');
navBar.setAttribute('id', 'nav-bar');

const home = document.createElement('li');
home.textContent = 'Home';
home.setAttribute('id', 'home');

const menu = document.createElement('li');
menu.textContent = 'Menu';
menu.setAttribute('id', 'menu');

const contact = document.createElement('li');
contact.textContent = 'Contact';
contact.setAttribute('id', 'contact');

export default function createNavBar() {
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  document.getElementById('navigation').appendChild(navBar);
}
