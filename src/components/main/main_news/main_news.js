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
               spaceBetween: 30,
               pagination: {
                   el: '.main_news__mob_slider_pagination',
                   clickable: true,
               },
               breakpoints: {
                   639: {
                       slidesPerView: 2,
                       spaceBetween: 30
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

