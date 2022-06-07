new Swiper('.main_slider__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.main_slider__btn_next',
        prevEl: '.main_slider__btn_prev'
    },
    pagination: {
        el: '.main_slider__pagination',
        clickable: true,
    },
    autoHeight: true,
    // autoplay: {
    //     delay: 6850,
    //     disableOnInteraction: false,
    // },
});
