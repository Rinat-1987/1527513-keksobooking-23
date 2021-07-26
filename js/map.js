import {
  createCustomPopup
} from './card.js';

import {
  address
} from './form.js';

import {
  filteringType,
  filteringPrice,
  filteringRooms,
  filteringGuests,
  filteringFeauters
} from './filter.js';

const COORDINATES_DECIMAL_PLACES = 5;
const SIMILAR_MARKER_COUNT = 10;
const COORDINATE_LAT_DEFAULT = 35.68950;
const COORDINATE_LNG_DEFAULT = 139.69200;
const MAP_SCALE = 10;
const SPECIAL_MARKER_SIZE = 52;
const SIMILAR_MARKER_SIZE = 40;

const map = L.map('map-canvas')
  .on('load', () => {})
  .setView({
    lat: COORDINATE_LAT_DEFAULT,
    lng: COORDINATE_LNG_DEFAULT,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [SPECIAL_MARKER_SIZE, SPECIAL_MARKER_SIZE],
  iconAnchor: [SPECIAL_MARKER_SIZE/2, SPECIAL_MARKER_SIZE],
});

const marker = L.marker({
  lat: COORDINATE_LAT_DEFAULT,
  lng: COORDINATE_LNG_DEFAULT,
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
  array.slice()
    .filter((object) => filteringType(object))
    .filter((object) => filteringPrice(object))
    .filter((object) => filteringRooms(object))
    .filter((object) => filteringGuests(object))
    .filter((object) => filteringFeauters(object))
    .slice(0, SIMILAR_MARKER_COUNT)
    .forEach((point) => {
      const lat = point.location.lat;
      const lng = point.location.lng;
      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [SIMILAR_MARKER_SIZE, SIMILAR_MARKER_SIZE],
        iconAnchor: [SIMILAR_MARKER_SIZE/2, SIMILAR_MARKER_SIZE],
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
    lat: COORDINATE_LAT_DEFAULT,
    lng: COORDINATE_LNG_DEFAULT,
  });
};

export {
  renderData,
  returnMarker,
  clearLayers
};
