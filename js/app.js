
const dialog = document.querySelector(`.modal`);

const cardButtons = document.querySelectorAll(`.card button`);


cardButtons.forEach(button => button.addEventListener('click', () => console.log(`You Clicked a Button!`)));