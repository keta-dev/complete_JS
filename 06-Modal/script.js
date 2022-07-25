"use strict"
const showBtn = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

// close modal reuseable
const modalClose = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// open modal reuseable
const openModal = function() {
    console.log('first')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// To display modal
for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", openModal);
}

// To hide modal when
closeModal.addEventListener('click', modalClose);
overlay.addEventListener('click', modalClose);

// how to respond to keyboard events(escape key)
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modalClose();
    }
  });