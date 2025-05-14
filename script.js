// script.js

// 1. Change the header text after load
const title = document.getElementById('page-title');
title.textContent = 'Hello, Dynamic World!';

// 2. Modify CSS: give the intro section a background color
const introSection = document.getElementById('intro');
introSection.style.padding = '1rem';
introSection.style.backgroundColor = '#f0f8ff';

// 3. Add / Remove an element when button is clicked
const btn = document.getElementById('toggle-btn');
let surpriseExists = false;
btn.addEventListener('click', () => {
  if (!surpriseExists) {
    const surprise = document.createElement('p');
    surprise.id = 'surprise';
    surprise.textContent = '🎉 Surprise Element Added! 🎉';
    surprise.style.color = 'crimson';
    introSection.appendChild(surprise);
    btn.textContent = 'Remove Surprise';
  } else {
    const surprise = document.getElementById('surprise');
    surprise.remove();
    btn.textContent = 'Add a Surprise!';
  }
  surpriseExists = !surpriseExists;
});
