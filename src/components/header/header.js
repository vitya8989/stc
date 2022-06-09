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
