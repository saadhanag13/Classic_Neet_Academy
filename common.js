// Navbar
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlinks");
const navlinks = document.querySelectorAll(".navlinks li");
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const navslide = () => {
  hamburger.addEventListener("click", () => {
    //toggle
    nav.classList.toggle("nav-active");
    //animation
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    if(line1.style.transform){
      line1.style.transform = ''
      line2.style.display = ''
      line3.style.transform = ''
    }else{
      line1.style.transform = "rotate(-45deg) translate(-5px,6px)";
      line2.style.display = "none";
      line3.style.transform = "rotate(45deg) translate(0px,0px)";
    }
  }); 
};

// 
// 


navslide();

// const menu = document.querySelector(".menu");

// let menuopen = false;

// function iftrue() {
//   menu.classList.add("open");
//   nav_container.style.top = "0";
//   title.style.opacity = "0";
//   menuopen = true;
// }

// function iffalse() {
//   menu.classList.remove("open");
//   nav_container.style.top = "-150vh";
//   title.style.opacity = "1";
//   menuopen = false;
// }

// menu.addEventListener("click", () => {
//   if (!menuopen) {
//     iftrue();
//   } else {
//     iffalse();
//   }
// });

// nav_container.addEventListener("click", () => {
//   iffalse();
// });

// const navContainer = document.querySelector(".nav-container");

// lastScroll = 0;
// window.addEventListener("scroll", () => {
//   let currentScroll = window.scrollY;
//   if (currentScroll > lastScroll) {
//     navContainer.style.transform = `translateY(${-100}%)`;
//   } else {
//     navContainer.style.transform = `translateY(${0}%)`;
//   }
//   lastScroll = currentScroll;
// });

// swiper js

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  // mousewheel: true,
  keyboard: true,
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
