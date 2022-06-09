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

