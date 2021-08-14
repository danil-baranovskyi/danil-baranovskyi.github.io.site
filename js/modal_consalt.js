const modal = document.querySelector('.modal');
const modalOpenLink = document.querySelector('.porpuse__link');
const modalClose = document.getElementById('modal-close');
const overflow = document.querySelector('.overflow');
const consalt = document.querySelector('.services__block-footer');


overflow.addEventListener('click', function(e){
    modal.classList.toggle('modal--active');
    overflow.classList.toggle('overflow--active');
});
modalClose.addEventListener('click', function(e){
    modal.classList.toggle('modal--active');
    overflow.classList.toggle('overflow--active');
});

document.addEventListener('click', function(event) {

    if (event.target.dataset.consalt != undefined) { // если есть атрибут...
        modal.classList.toggle('modal--active');
        overflow.classList.toggle('overflow--active');
    }
});