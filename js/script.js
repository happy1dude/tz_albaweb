// Меню
const menuBtn = document.querySelector('.burger-btn'); // Кнопка мобильного меню
const sidebar = document.querySelector('.sidebar'); // Само мобильное меню

// Кнопка прокрутки
const scrollDown = document.querySelector('.section-header-content-wrap__arrow'); // Кнопка прокрутки вниз
const sectionAdvantages = document.getElementById('advantages');

// Плавность прокрутки к якорям
const anchors = document.querySelectorAll('a[href*="#"]');

// Мобильое меню
menuBtn.onclick = () => {
    sidebar.classList.toggle('sidebar__show')
}

// Функция прокрутки вниз
scrollDown.addEventListener('click', () => {
   sectionAdvantages.scrollIntoView({block: "center", behavior: "smooth"});
});

// Функция плавности прокрутки к якорям
for (let anchor of anchors) {
   // Вешаем действие по событию
   anchor.addEventListener('click', event => {
      event.preventDefault();

      // Получаем значение в ссылке после "#"
      const blockId = anchor.getAttribute('href').substr(1);
      // Переходим к нужному якорю
      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth'
     })
   });
}

// Google-карты
function initMap() {
    // The location of Uluru
    const uluru = { lat: 55.75891952693745, lng: 37.59045935989981 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
      scrollwheel: false,
      style: [
        {
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#121925"
              }
           ]
        },
        {
           "elementType":"labels.icon",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d6d7d9"
              }
           ]
        },
        {
           "elementType":"labels.text.stroke",
           "stylers":[
              {
                 "color":"#212121"
              },
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"administrative",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#ffffff"
              }
           ]
        },
        {
           "featureType":"administrative.country",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#ffffff"
              }
           ]
        },
        {
           "featureType":"administrative.land_parcel",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"administrative.locality",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d6d7d9"
              }
           ]
        },
        {
           "featureType":"poi",
           "elementType":"labels.text",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"poi",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d6d7d9"
              }
           ]
        },
        {
           "featureType":"poi.business",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"poi.park",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#121925"
              }
           ]
        },
        {
           "featureType":"poi.park",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d6d7d9"
              }
           ]
        },
        {
           "featureType":"poi.park",
           "elementType":"labels.text.stroke",
           "stylers":[
              {
                 "color":"#1b1b1b"
              },
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"road",
           "elementType":"geometry.fill",
           "stylers":[
              {
                 "color":"#4e535b"
              }
           ]
        },
        {
           "featureType":"road",
           "elementType":"labels.icon",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"road",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d6d7d9"
              }
           ]
        },
        {
           "featureType":"road.arterial",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#4e535b"
              }
           ]
        },
        {
           "featureType":"road.highway",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#4e535b"
              }
           ]
        },
        {
           "featureType":"road.highway.controlled_access",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#4e535b"
              }
           ]
        },
        {
           "featureType":"road.local",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#d9d7d9"
              }
           ]
        },
        {
           "featureType":"transit",
           "stylers":[
              {
                 "visibility":"off"
              }
           ]
        },
        {
           "featureType":"transit",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#757575"
              }
           ]
        },
        {
           "featureType":"water",
           "elementType":"geometry",
           "stylers":[
              {
                 "color":"#121925"
              }
           ]
        },
        {
           "featureType":"water",
           "elementType":"labels.text.fill",
           "stylers":[
              {
                 "color":"#ffffff"
              }
           ]
        }
    ]
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}