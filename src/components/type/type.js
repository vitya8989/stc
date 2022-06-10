new Swiper('.type_slider__slider', {
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.type_slider__slider_btn_next',
        prevEl: '.type_slider__slider_btn_prev'
    },
    pagination: {
        el: '.type_slider__slider_pagination',
        clickable: true,
    },
});