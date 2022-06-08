const showSubMenu = document.querySelectorAll('.js_show_submenu');

const mediaQuery959 = window.matchMedia('(max-width: 959px)');
function headerTabletChange959(e) {
    if (e.matches) {
        $('.js_show_submenu').each(function( index ) {
            $( this ).find('.js_submenu').slideUp();
            $( this ).click(function() {
                $( this ).toggleClass('active');
                $( this ).find('.js_submenu').slideToggle();
            });
        });
    } else {
        for (let i = 0; i < showSubMenu.length; i++) {
            showSubMenu[i].onclick = function () {
                for (let j = 0; j < showSubMenu.length; j++) {
                    if (showSubMenu[i] !== showSubMenu[j]) {
                        showSubMenu[j].classList.remove('active');
                        showSubMenu[j].querySelector('.js_submenu').classList.remove('show');
                    }
                }
                showSubMenu[i].classList.toggle('active');
                showSubMenu[i].querySelector('.js_submenu').classList.toggle('show');
            }
        }
    }
}
mediaQuery959.addListener(headerTabletChange959);
headerTabletChange959(mediaQuery959);

const headerBurger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.js_mobile_menu');

headerBurger.onclick = function () {
    if (mobileMenu.classList.contains('menu-open')) {
        $('.js_mobile_menu').find('.js_show_submenu').each(function( index ) {
            $( this ).find('.js_submenu').slideUp();
            $( this ).removeClass('active');
        });
    }
    document.body.classList.toggle('this--overflow');
    headerBurger.classList.toggle('burger-open');
    mobileMenu.classList.toggle('menu-open');
}

const mainHeaderWr = document.querySelector('.main_header_wr');
if (mainHeaderWr) {
    window.addEventListener('scroll', function () {
        if (pageYOffset > 10) {
            mainHeaderWr.classList.remove('main_header_wr');
        } else {
            mainHeaderWr.classList.add('main_header_wr');
        }
    })
}
;
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
;
const mainNewsItems = document.querySelector('.main_news__items');
const mainNewsItem = document.querySelectorAll('.main_news__item');
const mainNewsMobSliderWrapper = document.querySelector('.main_news__mob_slider_wrapper');
let mainNewsMobSlider = undefined;

function mainNewsTabletChange959(e) {
    if (e.matches) {
       if (mainNewsItem[0].classList.contains('this--big')) {
           mainNewsItem[0].classList.remove('this--big');
       }
       for (let i = 0; i < mainNewsItem.length; i++) {
           mainNewsItem[i].classList.add('swiper-slide');
           mainNewsItem[i].classList.add('main_news__mob_slider_slide');
           mainNewsMobSliderWrapper.append(mainNewsItem[i]);
       }
       if (mainNewsMobSlider == undefined) {
           mainNewsMobSlider = new Swiper('.main_news__mob_slider', {
               speed: 700,
               slidesPerView: 1,
               spaceBetween: 20,
               pagination: {
                   el: '.main_news__mob_slider_pagination',
                   clickable: true,
               },
               breakpoints: {
                   639: {
                       slidesPerView: 2,
                       spaceBetween: 20
                   }
               }
           });
       }

    } else {
        mainNewsItem[0].classList.add('this--big');
        for (let i = 0; i < mainNewsItem.length; i++) {
            mainNewsItem[i].classList.remove('swiper-slide');
            mainNewsItem[i].classList.remove('main_news__mob_slider_slide');
            mainNewsItems.append(mainNewsItem[i]);
        }
        if (mainNewsMobSlider != undefined) {
            mainNewsMobSlider.destroy();
            mainNewsMobSlider = undefined;
        }
    }
}
if (mainNewsItems && mainNewsItem && mainNewsMobSliderWrapper) {
    mediaQuery959.addListener(mainNewsTabletChange959);
    mainNewsTabletChange959(mediaQuery959);
}

;
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
;
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
;
