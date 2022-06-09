const productBigSliders = document.querySelectorAll('.product_big_slider');
const productNavSliders = document.querySelectorAll('.product_nav_slider');
if (productBigSliders.length > 0 && productNavSliders.length > 0) {
    for (let i = 0; i < productBigSliders.length; i++) {
        new Swiper( productBigSliders[i], {
            speed: 100,
            slidesPerView: 1,
            effect: 'fade',
            simulateTouch: true,
            allowTouchMove: true,
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            thumbs: {
                swiper: {
                    el: productNavSliders[i],
                    slidesPerView: 4,
                    spaceBetween: 7,
                    breakpoints: {
                        500: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }
                }
            },
            breakpoints: {
                960: {
                    loop: false,
                    allowTouchMove: false,
                    simulateTouch: false,
                }
            }
        });
    }
}
