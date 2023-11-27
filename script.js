/*Получили элементы*/
let nav = document.getElementById('nav');
let closeNavBtn = document.getElementById('close-nav-btn');
let burger = document.getElementById('burger');
let menuItems = document.getElementsByTagName('a');

burger.addEventListener('click',BurgerClick);
closeNavBtn.addEventListener('click',CloseNav);

console.log(menuItems);


for(let i=0; i<menuItems.length;i++){
    menuItems[i].addEventListener('click',CloseNav);
}

function BurgerClick(e){
    e.preventDefault();
    nav.classList.toggle('open');
    burger.classList.toggle('open');
}

function CloseNav(e){
    nav.classList.remove('open');
    burger.classList.remove('open');
}