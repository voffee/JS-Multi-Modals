
const dialog = document.querySelector(`.modal`);
const dialogContainer = document.querySelector(`.modal-container`);

const cardButtons = document.querySelectorAll(`.card button`);

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest(`.card`);
    const imgSrc = card.querySelector(`img`).src;
    const desc = card.dataset.description;
    const name = card.querySelector(`h2`).textContent;

    // Populate Modal
    dialog.innerHTML = `
        <img src="${imgSrc.replace('200', '400')}" alt = ""/>
        <p>${name}</p>
    `

    // Show Modal
    dialog.showModal();
    console.log(desc);
    console.log(imgSrc);
}

dialogContainer.addEventListener(`click`, function(e) {
   const rect = dialog.getBoundingClientRect();
   const clickedInsideModal = (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
   );

   if (clickedInsideModal === false) {
        dialog.close();
   }

});

window.addEventListener(`cancel`, () => dialog.close());


cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));