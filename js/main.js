//* BURGER-MENU

const menuIcon = document?.querySelector(".menu-icon");
const header = document?.querySelector(".header");
const navLinks = header.querySelectorAll("a");
const body = document.querySelector("body");

menuIcon.addEventListener('click', () => {
   menuIcon?.classList.toggle('menu-icon_active');
   header?.classList.toggle('header_mobile');
   // запрещаем скролл при открытом меню
   // body.classList.toggle('no-scroll');
});

// закрываем меню при клике на пункт меню
navLinks.forEach(el => {
   el.addEventListener('click', () => {
      menuIcon?.classList.remove('menu-icon_active');
      header?.classList.remove('header_mobile');
   });
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
   // Скрываем все слайды 
   slidesArrows.forEach(item => item.style.display = "none");
   // Показываем текущий слайд 
   slidesArrows[slideIndex].style.display = "block";
}

showSlideArrows(0);


//* SLIDER-DOTS

const sliderDots = document.querySelector(".slider-dots");
const slidesDots = sliderDots.querySelectorAll(".slider-dots__item");
const wrapperDots = sliderDots.querySelector(".slider-dots__dots-wrapper");

// Точки добавляем на страницу динамически
const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
   const dot = document.createElement('button');
   // Идентифицируем точку (добавляем data-атрибут slide-to с индексом)
   dot.dataset.slideTo = i;
   // Добавляем класс со стилями
   dot.classList.add('slider-dots__dot', 'half-transparent');
   // При создании первой точки делаем её активной
   if (i == 0) dot.classList.add('slider-dots__dot_active');
   // Остальные слайды скрываем
   if (i != 0) slidesDots[i].style.display = 'none';
   // При клике на точку вызываем функцию показа слайда
   dot.addEventListener('click', showSlideDots);
   // Выводим в обертку для dots
   wrapperDots.append(dot);
   // Добавляем точки в массив
   dots.push(dot);
}

function showSlideDots(e) {
   // Получаем значение data-атрибута slide-to, по которому был клик
   const slideTo = e.target.dataset.slideTo;

   slidesDots.forEach(item => item.style.display = "none");
   slidesDots[slideTo].style.display = "block";

   // Добавляем класс активности текущей точке
   dots.forEach(dot => dot.classList.remove('slider-dots__dot_active'));
   e.target.classList.add('slider-dots__dot_active');
}


