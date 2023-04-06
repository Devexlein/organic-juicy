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

//* SLIDER-ARROWS
const sliderArrows = document.querySelector(".slider-arrows");
const slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item");
const prev = sliderArrows.querySelector(".slider-arrows__arrow_prev");
const next = sliderArrows.querySelector(".slider-arrows__arrow_next");

// Текущий слайд
let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n = 0) {
   slideIndex += n;

   if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
   if (slideIndex >= slidesArrows.length) slideIndex = 0;

   slidesArrows.forEach(item => item.style.display = "none");
   slidesArrows[slideIndex].style.display = "block";
}

showSlideArrows(0);