import {
  renderData,
  clearLayers
} from './map.js';

const newArray = [];

const filterForm = document.querySelector('.map__filters');
const selectType = filterForm.querySelector('#housing-type');
const selectPrice = filterForm.querySelector('#housing-price');

const createMarker = (obj) => {
  newArray.push(obj);
  clearLayers();
  renderData(newArray);
};

const getValueType = (arr) => {
  selectType.addEventListener('input', () => {
    arr.forEach((obj) => {
      if (obj.offer.type === selectType.value) {
        createMarker(obj);
      }
    });
  });
};

const getValuePrice = (arr) => {
  selectPrice.addEventListener('input', () => {
    arr.forEach((obj) => {
      if (obj.offer.price < 10000 && selectPrice.value === 'low') {
        createMarker(obj);
      } else if (obj.offer.price >= 10000 && obj.offer.price < 50000 && selectPrice.value === 'middle') {
        createMarker(obj);
      } else if (obj.offer.price >= 50000 && selectPrice.value === 'high') {
        createMarker(obj);
      }
    });
  });
};

export {
  selectType,
  getValueType,
  getValuePrice
};
