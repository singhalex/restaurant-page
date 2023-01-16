import MainImage from './images/main.jpg';

// Add main image
const mainImage = document.createElement('img');
mainImage.src = MainImage;
mainImage.setAttribute('id', 'main-image');

// Create the title element
const restaurantName = 'Le Jardin des Delices';
const title = document.createElement('h1');
title.textContent = restaurantName;

// Create description
const descriptionText = "Welcome to Le Jardin des Delices, where you can indulge in delicious cuisine and impeccable service. Our menu features a variety of gourmet dishes made with the freshest ingredients and expertly prepared by our skilled chefs. Whether you're looking for a romantic dinner for two or a special occasion with friends and family, we offer a warm and elegant atmosphere that is sure to impress. Join us for a night of culinary delights and memories that will last a lifetime.";
const description = document.createElement('p');
description.textContent = descriptionText;

const content = document.getElementById('content');

export default function buildMainPage() {
  content.appendChild(mainImage);
  content.appendChild(title);
  content.appendChild(description);
}
