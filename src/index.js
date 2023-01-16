import './style.css';
import createNavBar from './navBar';
import buildMainPage from './mainPage';

// Load main page
createNavBar();
buildMainPage();

const content = document.getElementById('content');
function clearPage() {
  content.innerHTML = '';
}

home.addEventListener('click', () => {
  clearPage();
  buildMainPage();
});

menu.addEventListener('click', () => {
  clearPage();
});

contact.addEventListener('click', () => {
  clearPage();
});
