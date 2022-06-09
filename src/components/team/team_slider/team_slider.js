new Swiper('.team_slider__slider', {
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.team_slider__slider_btn_next',
        prevEl: '.team_slider__slider_btn_prev'
    },
    pagination: {
        el: '.team_slider__slider_pagination',
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 60,
        }
    }
});