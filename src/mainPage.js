import MainImage from './images/main.jpg';

const mainPageContent = [];

// Add main image
const mainImage = document.createElement('img');
mainImage.src = MainImage;
mainImage.setAttribute('id', 'main-image');
mainPageContent.push(mainImage);

// Create the title element
const restaurantName = 'Le Jardin des Delices';
const title = document.createElement('h1');
title.textContent = restaurantName;
mainPageContent.push(title);

// Create description
const descriptionText = "Welcome to Le Jardin des Delices, where you can indulge in delicious cuisine and impeccable service. Our menu features a variety of gourmet dishes made with the freshest ingredients and expertly prepared by our skilled chefs. Whether you're looking for a romantic dinner for two or a special occasion with friends and family, we offer a warm and elegant atmosphere that is sure to impress. Join us for a night of culinary delights and memories that will last a lifetime.";
const description = document.createElement('p');
description.textContent = descriptionText;
mainPageContent.push(description);

// Create hours section
const hoursContainer = document.createElement('div');
hoursContainer.setAttribute('id', 'hours-container');
const hours = document.createElement('h2');
hours.textContent = 'Hours';
hoursContainer.appendChild(hours);

// Create elements for each day
const sunday = document.createElement('p');
const monday = document.createElement('p');
const tuesday = document.createElement('p');
const wednesday = document.createElement('p');
const thursday = document.createElement('p');
const friday = document.createElement('p');
const saturday = document.createElement('p');

// Schedule text
sunday.textContent = 'Sunday: 8am - 8pm';
monday.textContent = 'Monday: Closed';
tuesday.textContent = 'Tuesday: 3pm - 8pm';
wednesday.textContent = 'Wednesday: 3pm - 8pm';
thursday.textContent = 'Thursday: 3pm - 8pm';
friday.textContent = 'Friday: 10am - 11pm';
saturday.textContent = 'Saturday: 10am - 12pm';

// Add day elements to hours section
hoursContainer.appendChild(sunday);
hoursContainer.appendChild(monday);
hoursContainer.appendChild(tuesday);
hoursContainer.appendChild(wednesday);
hoursContainer.appendChild(thursday);
hoursContainer.appendChild(friday);
hoursContainer.appendChild(saturday);

mainPageContent.push(hoursContainer);

// Location section
const locationContainer = document.createElement('div');
locationContainer.setAttribute('id', 'location-container');
const address = document.createElement('p');
address.textContent = '123 Mullberry Dr, Maintown, USA';

const content = document.getElementById('content');

export default function buildMainPage() {
  mainPageContent.forEach((element) => content.appendChild(element));
}
