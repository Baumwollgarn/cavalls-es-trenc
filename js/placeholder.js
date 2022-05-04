function toggleMenu() {
    document.getElementById("navigation").classList.toggle("responsive");
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        for (const dataItem of data) {
            createOffer(dataItem);
        }
    })

let card = document.querySelector('.offers');
let cardContent = document.createElement('div');
cardContent.className = 'card-content';

function createOffer(data) {
    cardContent.innerHTML += 
        
            `<div class="offer-card">
            <img src="https://picsum.photos/seed/${data.id + data.name + 12}/500/500" alt="photo">
            <h1>${data.name}</h1>
            <p>${data.email}</p>
            <p>${data.phone}</p>
            <p>${data.website}</p>
            <h2 class="price">${generatePrice()} € </h2>
            </div>
            `;
    
    card.appendChild(cardContent);
}

let generatePrice = () => {
    return Math.floor(Math.random() * (1000 - 10) + 10);
}

let parent = document.querySelector('.sticky').parentElement;

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}