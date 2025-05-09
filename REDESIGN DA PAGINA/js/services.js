document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".testimonial-container", {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }
});
