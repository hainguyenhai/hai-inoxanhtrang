/*================================Scrolltop================================ */

var scrollTopBtn = document.querySelector(".scroll__top");
scrollTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", scrollto);

function scrollto() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*================================Menu================================ */

var btnCollapse = document.querySelector(".btn__collapse");
var nav__bg = document.querySelector(".nav__bg");
var menu = document.querySelector(".menu");

btnCollapse.addEventListener("click", showMenu);

function showMenu() {
  if (!menu.classList.contains("menu-tl")) {
    menu.classList.add("menu-tl");
    nav__bg.classList.add("nav__bg-scale");
  } else {
    menu.classList.remove("menu-tl");
    nav__bg.classList.remove("nav__bg-scale");
  }
}
/*================================Slider================================ */
var slideIndex = 0;
var slide = document.getElementsByClassName("slide");
var nextBtn = document.getElementById("sau");
var presvBtn = document.getElementById("truoc");

function hienThiSlide() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex].style.display = "block";
}
hienThiSlide();
function nextSlide() {
  if (slideIndex >= slide.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  hienThiSlide();
}
function preSlider() {
  if (slideIndex === 0) {
    slideIndex = slide.length - 1;
  } else {
    slideIndex--;
  }
  hienThiSlide();
}
nextBtn.addEventListener("click", nextSlide);
presvBtn.addEventListener("click", preSlider);
setInterval(nextSlide, 5000);
