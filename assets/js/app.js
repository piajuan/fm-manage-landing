const plugins = (function () {

    const mobileNav = function () {
        const menuBtn = document.querySelector('.menu__hamburger');
        const menuNav = document.querySelector('.menu__mobile-nav');
        
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            menuNav.classList.toggle('hidden');
        })
    };

    const testimonialsSwiper = function() {
        var swiper = new Swiper(".testimonials__swiper", {
            slidesPerView: 'auto',
            pagination: {
              el: ".testimonials .swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            },
        });
    };

    function initialize() {
        mobileNav();
        testimonialsSwiper();
    }

    return {
        init: initialize()
    };

})();

$(document).ready(function () {
  plugins.init;
});

// 
