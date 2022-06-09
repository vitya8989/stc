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
}