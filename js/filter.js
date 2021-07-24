import {
  clearLayers,
  renderData
} from './map.js';

const FIRST_PRICE_CATEGORY = 10000;
const SECOND_PRICE_CATEGORY = 50000;
const VALUE_ANY = 'any';
const LOW_PRICE_VALUE = 'low';
const MIDDLE_PRICE_VALUE = 'middle';
const HIGH_PRICE_VALUE = 'high';

const filterForm = document.querySelector('.map__filters');
const selectType = filterForm.querySelector('#housing-type');
const selectPrice = filterForm.querySelector('#housing-price');
const selectRooms = filterForm.querySelector('#housing-rooms');
const selectGuests = filterForm.querySelector('#housing-guests');

const filterData = (array) => {
  const newArray = [];
  array.forEach((object) => {
    if (selectType.value === VALUE_ANY || object.offer.type === selectType.value) {
      if (selectRooms.value === VALUE_ANY || object.offer.rooms.toString() === selectRooms.value) {
        if (selectGuests.value === VALUE_ANY || object.offer.guests.toString() === selectGuests.value) {
          if (selectPrice.value === VALUE_ANY) {
            const findChecked = document.querySelectorAll('input:checked');
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
                  newArray.push(object);}
                else {newArray.push(object);}
              } else {newArray.push(object);}
            } else {newArray.push(object);}
          } else if (object.offer.price < FIRST_PRICE_CATEGORY && selectPrice.value === LOW_PRICE_VALUE) {
            newArray.push(object);
          } else if (object.offer.price >= FIRST_PRICE_CATEGORY && object.offer.price < SECOND_PRICE_CATEGORY && selectPrice.value === MIDDLE_PRICE_VALUE) {
            newArray.push(object);
          } else if (object.offer.price >= SECOND_PRICE_CATEGORY && selectPrice.value === HIGH_PRICE_VALUE) {
            newArray.push(object);
          }}}}});
  renderData(newArray);
};

const cbFormChange = (cb) => {
  filterForm.addEventListener('change', () => {
    clearLayers();
    cb();
  });
};

export {
  filterData,
  cbFormChange
};
