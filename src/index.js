import './style.css';
import createNavBar from './navBar';
import buildMainPage from './mainPage';
import createMenu from './menu';
import buildContact from './contact';

// Load main page
createNavBar();
buildMainPage();

// const content = document.getElementById('content');
function clearPage() {
  content.innerHTML = '';
}

home.addEventListener('click', () => {
  clearPage();
  buildMainPage();
});

menu.addEventListener('click', () => {
  clearPage();
  createMenu();
});

contact.addEventListener('click', () => {
  clearPage();
  buildContact();
});
