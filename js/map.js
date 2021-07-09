//Здесь будет карта
import {
  createAdvertisements
} from './data.js';

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.68950,
    lng: 139.69200,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);

const address = document.querySelector('#address');

marker.on('moveend', (evt) => {
  const newMarker = evt.target.getLatLng();
  const newMarkerLat = newMarker.lat;
  const newMarkerLng = newMarker.lng;
  address.value = `${newMarkerLat.toFixed(5)}, ${newMarkerLng.toFixed(5)}`;
});

const createCustomPopup = (point) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = cardTemplate.cloneNode(true);

  popupElement.querySelector('.popup__avatar').textContent = point.author.avatar;
  popupElement.querySelector('.popup__title').textContent = point.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${point.offer.address}`;
  popupElement.querySelector('.popup__text--price').textContent = `Стоимость: ${point.offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = point.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  popupElement.querySelector('.popup__features').textContent = point.offer.features;
  popupElement.querySelector('.popup__description').textContent = point.offer.description;
  popupElement.querySelector('.popup__photo').src = point.offer.photos;

  if (popupElement.children.textContent === '') {
    popupElement.children.classList.add('hidden');
  } else {
    return popupElement;
  }
};

const newAdvertisement = createAdvertisements(10);

newAdvertisement.forEach((point) => {
  const lat = point.location.lat;
  const lng = point.location.lng;
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const newMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  newMarker
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
    );
});

export {map};
