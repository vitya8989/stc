new Swiper('.patents_cards__slider', {
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.patents_cards__slider_btn_next',
        prevEl: '.patents_cards__slider_btn_prev'
    },
    pagination: {
        el: '.patents_cards__slider_pagination',
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
