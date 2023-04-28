'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const body = document.querySelector('body');

// Function used to enable the Modal
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Function used to desable the Modal
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// For Loop to check similar elements using the same CSS class
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', open);
  btnCloseModal.addEventListener('click', close);
  overlay.addEventListener('click', close);
}

// Event to be trigger when the ESC key is pressed
document.addEventListener('keydown', function (evento) {
  //   console.log(e);
  //   console.log('A key was pressed!');
  if (evento.code === 'Escape') {
    close();
  }
});
