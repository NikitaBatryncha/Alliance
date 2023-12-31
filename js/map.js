ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.762053, 37.611241],
      zoom: 16,
    });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/mark.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-5, -38]
    }),
  myMap.geoObjects
  .add(myPlacemark)
}
