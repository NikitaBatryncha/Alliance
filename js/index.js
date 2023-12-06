document.addEventListener("DOMContentLoaded", () => {
  const selector = document.querySelector("input[type='tel']");
  const inp = new Inputmask("999-999-9999");
  inp.mask(selector);
})

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__container')

burger.addEventListener('click',() => {
  burger.classList.toggle('burger--active');
  burger.classList.toggle('burger--close')
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
});

const menuLinks = nav.querySelectorAll('.nav__link');
const closeButton = nav.querySelector('.burger--close');

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  })
});

const aboutContainer = document.querySelector('.about__container');
const grid = document.querySelector('.grid');
const cards = document.querySelectorAll('.card');

const windowWidth = window.innerWidth;

  const swiperBlog = new Swiper('.blog__swiper', {
    pagination: {
      el: ".swiper-pagination",
    },
  });


  const swiperAbout = new Swiper('.about__swiper', {
    pagination: {
      el: ".swiper-pagination-about",
    },
  });

closeButton.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  menu.classList.remove('nav--active');
  document.body.classList.remove('stop-scroll');
});
