import FrenchToast from './images/menu/french-toast.jpg';
import Pizza from './images/menu/pizza.jpg';
import Ramen from './images/menu/ramen.jpg';
import Salad from './images/menu/salad.jpg';
import Salmon from './images/menu/salmon.jpg';
import Tacos from './images/menu/tacos.jpg';

// An array to collect the menu items
const menuItems = [];

const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menu-container');

// Creates objects of different menu items with properties that will be displayed
const MenuItem = (title, description, price, picture) => ({
  title, description, price, picture,
});

const frenchToastPhoto = document.createElement('img');
frenchToastPhoto.src = FrenchToast;
const frenchToastItem = MenuItem('French Toast', 'Indulge in our decadent Fancy French Toast with Blueberries. Made with thick slices of brioche bread, dipped in a rich vanilla custard and grilled to perfection. Topped with a generous helping of plump, juicy blueberries and a sprinkle of powdered sugar. Served with a side of maple syrup for the perfect sweet and savory breakfast treat.', '14.99', frenchToastPhoto);
menuItems.push(frenchToastItem);

const pizzaPhoto = document.createElement('img');
pizzaPhoto.src = Pizza;
const pizza = MenuItem('Pizza', 'Our gourmet pizza features a crispy, wood-fired crust, topped with a rich tomato sauce and the finest mozzarella cheese. Topped with an array of fresh, seasonal ingredients such as sautéed wild mushrooms, truffle oil, as well as prosciutto and arugula. This pizza is finished with a sprinkle of grated Parmesan cheese and a drizzle of balsamic glaze, making it the perfect blend of flavors and textures.', '24.99', pizzaPhoto);
menuItems.push(pizza);

const ramenPhoto = document.createElement('img');
ramenPhoto.src = Ramen;
const ramen = MenuItem('Ramen', 'Our signature shrimp ramen is a delicious and comforting dish that is sure to satisfy. The bowl is filled with a savory broth made with a blend of seafood and pork bones. The ramen is cooked to perfection and served with succulent shrimp and a variety of fresh vegetables such as bok choy, shiitake mushrooms, and scallions. Topped with a soft boiled egg and a sprinkle of sesame seeds, this dish is a perfect balance of flavors and textures.', '19.99', ramenPhoto);
menuItems.push(ramen);

const saladPhoto = document.createElement('img');
saladPhoto.src = Salad;
const salad = MenuItem('Salad', "Our signature salad is a refreshing and delicious dish that is sure to please. It's made with a variety of fresh greens such as mixed lettuces, arugula and baby spinach. Topped with a variety of premium ingredients such as oven-roasted cherry tomatoes, cand nuts and gourmet cheeses, and served with a house-made vinaigrette dressing. Perfectly balanced flavors and textures, this salad is a great option for a healthy and satisfying meal", '13.99', saladPhoto);
menuItems.push(salad);

const salmonPhoto = document.createElement('img');
salmonPhoto.src = Salmon;
const salmon = MenuItem('Salmon', 'Our signature entrée is a deliciously prepared salmon that is both flavorful and cooked to perfection. Served in a savory broth, this fish is grilled and topped with a lemon herb butter, and served with a side of mixed vegetables. The tender and flaky salmon is sure to impress. This dish is a great option for those looking for a satisfying and delicious meal.', '23.99', salmonPhoto);
menuItems.push(salmon);

const tacosPhoto = document.createElement('img');
tacosPhoto.src = Tacos;
const tacos = MenuItem('Tacos', 'Our signature dish is a perfect blend of flavors and textures. The tacos are made with fresh, warm corn tortillas and filled with savory sweet potato, black beans, and topped with a delicious citrus slaw. Served with a side of avocado crema, this dish is sure to impress. Perfect for those looking for a satisfying and delicious meal.', '13.99', tacosPhoto);
menuItems.push(tacos);

// Adds each menu item to the page
export default function createMenu() {
  menuContainer.innerHTML = '';
  document.getElementById('content').appendChild(menuContainer);
  menuItems.forEach((item) => {
    const menuItemContainer = document.createElement('div');
    const menuItemText = document.createElement('div');

    menuItemText.setAttribute('class', 'item-text');
    menuItemContainer.setAttribute('class', 'item-container');

    const title = document.createElement('p');
    title.innerText = item.title;
    title.setAttribute('class', 'item-title');
    menuItemText.appendChild(title);

    const description = document.createElement('p');
    description.innerText = item.description;
    description.setAttribute('class', 'item-description');
    menuItemText.appendChild(description);

    const price = document.createElement('p');
    price.innerText = `$${item.price}`;
    price.setAttribute('class', 'item-price');
    menuItemText.appendChild(price);

    menuItemContainer.appendChild(menuItemText);

    item.picture.setAttribute('class', 'menu-picture');
    menuItemContainer.appendChild(item.picture);

    menuContainer.appendChild(menuItemContainer);
  });
}
