import {
  COORDINATES_DECIMAL_PLACES
} from './data.js';

import {
  createCustomPopup
} from './card.js';

import {
  buttonReset
} from './util.js';

const formReset = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {})
  .setView({
    lat: 35.68950,
    lng: 139.69200,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: 35.6895,
  lng: 139.692,
}, {
  draggable: true,
  icon: mainPinIcon,
});
marker.addTo(map);

const address = document.querySelector('#address');

marker.on('moveend', (evt) => {
  const newMarker = evt.target.getLatLng();
  const newMarkerLat = newMarker.lat;
  const newMarkerLng = newMarker.lng;
  address.value = `${newMarkerLat.toFixed(COORDINATES_DECIMAL_PLACES)}, ${newMarkerLng.toFixed(COORDINATES_DECIMAL_PLACES)}`;
});

const renderData = (array) => {
  array.forEach((point) => {
    const lat = point.location.lat;
    const lng = point.location.lng;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const newMarker = L.marker({
      lat,
      lng,
    }, {
      icon,
    });
    newMarker
      .addTo(map)
      .bindPopup(
        createCustomPopup(point),
      );
  });
};

const returnMarker = () => {
  marker.setLatLng({
    lat: 35.68950,
    lng: 139.69200,
  });
};

formReset.addEventListener('click', (evt) => {
  buttonReset(evt);
  marker.setLatLng({
    lat: 35.68950,
    lng: 139.69200,
  });
});

export {
  renderData,
  returnMarker
};
