const openModal = document.querySelector('#btn-modal');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('open-modal');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('open-modal');
    modal.classList.add('hidden');
})