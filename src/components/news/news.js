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
