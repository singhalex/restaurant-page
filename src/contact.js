import Chef from './images/chef.jpg';

const contactContainer = document.createElement('div');
contactContainer.id = 'contact-container';

const chefPhoto = document.createElement('img');
chefPhoto.src = Chef;
chefPhoto.id = 'chef-photo';

contactContainer.appendChild(chefPhoto);

const contactText = document.createElement('div');
contactText.id = 'contact-text';

const chefName = document.createElement('p');
chefName.id = 'chef-name';
chefName.textContent = 'Chef Peppermaker';
contactText.appendChild(chefName);

const phoneNo = document.createElement('p');
phoneNo.id = 'phone-number';
phoneNo.textContent = '555.555.5555';
contactText.appendChild(phoneNo);

const email = document.createElement('a');
email.id = 'email';
email.textContent = 'real-email@totallyrealemail.com';
email.href = '#';
contactText.appendChild(email);

contactContainer.appendChild(contactText);

export default function buildContact() {
  document.getElementById('content').appendChild(contactContainer);
}
