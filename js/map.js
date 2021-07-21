import {
  createCustomPopup
} from './card.js';

import {
  address
} from './form.js';

const COORDINATES_DECIMAL_PLACES = 5;
const SIMILAR_MARKER_COUNT = 10;

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

marker.on('moveend', (evt) => {
  const newMarker = evt.target.getLatLng();
  const newMarkerLat = newMarker.lat;
  const newMarkerLng = newMarker.lng;
  address.value = `${newMarkerLat.toFixed(COORDINATES_DECIMAL_PLACES)}, ${newMarkerLng.toFixed(COORDINATES_DECIMAL_PLACES)}`;
});

const markerGroup = L.layerGroup().addTo(map);
const clearLayers = () => {
  markerGroup.clearLayers();
};

const renderData = (array) => {
  array.slice(0, SIMILAR_MARKER_COUNT)
    .forEach((point) => {
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
        .addTo(markerGroup)
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

export {
  renderData,
  returnMarker,
  clearLayers,
  SIMILAR_MARKER_COUNT
};
