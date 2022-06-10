const mediaQuery959 = window.matchMedia('(max-width: 959px)');
function headerTabletChange959(e) {
    if (e.matches) {
        $('.js_show_submenu').each(function( index ) {
            $( this ).find('.js_submenu').slideUp();
            $( this ).click(function(e) {
                $( this ).toggleClass('active');
                $( this ).find('.js_submenu').slideToggle();
            });
        });
    } else {
        $('.js_show_submenu').each(function( index ) {
            $( this ).find('.js_submenu').slideDown();
            $( this ).off( "click");
        });
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
window.addEventListener('load', function() {
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
});
;
const mainNewsItems = document.querySelector('.main_news__items');
const jsMainNewsItem = document.querySelectorAll('.js_main_news_item');
const mainNewsMobSliderWrapper = document.querySelector('.main_news__mob_slider_wrapper');
let mainNewsMobSlider = undefined;

function mainNewsTabletChange959(e) {
    if (e.matches) {
       if (jsMainNewsItem[0].classList.contains('this--big')) {
           jsMainNewsItem[0].classList.remove('this--big');
       }
       for (let i = 0; i < jsMainNewsItem.length; i++) {
           jsMainNewsItem[i].classList.add('swiper-slide');
           jsMainNewsItem[i].classList.add('main_news__mob_slider_slide');
           mainNewsMobSliderWrapper.append(jsMainNewsItem[i]);
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
        jsMainNewsItem[0].classList.add('this--big');
        for (let i = 0; i < jsMainNewsItem.length; i++) {
            jsMainNewsItem[i].classList.remove('swiper-slide');
            jsMainNewsItem[i].classList.remove('main_news__mob_slider_slide');
            mainNewsItems.append(jsMainNewsItem[i]);
        }
        if (mainNewsMobSlider != undefined) {
            mainNewsMobSlider.destroy();
            mainNewsMobSlider = undefined;
        }
    }
}
if (mainNewsItems && jsMainNewsItem && mainNewsMobSliderWrapper) {
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

new Swiper('.certificate_cards__slider', {
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.certificate_cards__slider_btn_next',
        prevEl: '.certificate_cards__slider_btn_prev'
    },
    pagination: {
        el: '.certificate_cards__slider_pagination',
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

new Swiper('.diploms_cards__slider', {
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.diploms_cards__slider_btn_next',
        prevEl: '.diploms_cards__slider_btn_prev'
    },
    pagination: {
        el: '.diploms_cards__slider_pagination',
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
});;
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
});;
const jsNewsItem = document.querySelectorAll('.js_news_item');
if (jsNewsItem[0]) {
    function newsTabletChange959(e) {
        if (e.matches) {
            if (jsNewsItem[0].classList.contains('this--big')) {
                jsNewsItem[0].classList.remove('this--big');
            }
        } else {
            jsNewsItem[0].classList.add('this--big');
        }
    }
    mediaQuery959.addListener(newsTabletChange959);
    newsTabletChange959(mediaQuery959);
}
;
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
;
let map = document.getElementById('contacts_map');

if (map) {
    let scriptMap = document.createElement('script');
    scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
    setTimeout(() => document.head.append(scriptMap), 0);
    scriptMap.onload = function () {
        ymaps.ready(init);
    };

    function init() {
        var myMap = new ymaps.Map(map, {
            center: [60.003358, 30.383547],
            zoom: 16,
            controls: []
        });
        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                top: '40px',
                right: '20px'
            }
        });
        var myPlacemark = new ymaps.Placemark([60.003358, 30.383547], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/contacts/point_map.svg',
            iconImageSize: [62, 78],
            iconImageOffset: [-30, -70]
        });
        myMap.geoObjects.add(myPlacemark);
    }
};
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
});;
