'use strict';
const modalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

for(let i = 0 ; i < modalBtns.length ; i++){
    modalBtns[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
       
    })
}

const closeModal = function(){
   
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
   
    
}

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown',function(evt){
    if(evt.key === "Escape"&& !modal.classList.contains('hidden')){
    closeModal();
    }
})