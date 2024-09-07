// Sample JavaScript to fetch and display rare coin images
const gallery = document.querySelector('.gallery');

// Replace this with your own logic to fetch and display images
const rareCoins = [
  'coin1.jpg',
  'coin2.jpg',
  'coin3.jpg',
  // Add more coin images here
];

// Dynamically create image elements for each rare coin
rareCoins.forEach((coin) => {
  const image = document.createElement('img');
  image.src = coin;
  image.alt = 'Rare Coin';
  gallery.appendChild(image);
});