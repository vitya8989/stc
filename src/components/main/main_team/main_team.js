new Swiper('.main_team__slider', {
    speed: 700,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.main_team__slider_btn_next',
        prevEl: '.main_team__slider_btn_prev'
    },
    pagination: {
        el: '.main_team__slider_pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            spaceBetween: 60,
        }
    }
});
