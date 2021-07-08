//Здесь будет карта
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
  iconUrl: 'img/images leaflet/marker-icon.png',
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

export {map};
