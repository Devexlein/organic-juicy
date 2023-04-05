//* BURGER-MENU

const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector(".header");
const body = document.querySelector("body");

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('menu-icon_active');
   header.classList.toggle('header_mobile');
   // запрещаем скролл при открытом меню
   // body.classList.toggle('no-scroll');
});