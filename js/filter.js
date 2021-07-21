import {
  clearLayers,
  renderData
} from './map.js';

const FIRST_PRICE_CATEGORY = 10000;
const SECOND_PRICE_CATEGORY = 50000;

const filterForm = document.querySelector('.map__filters');
const selectType = filterForm.querySelector('#housing-type');
const selectPrice = filterForm.querySelector('#housing-price');
const selectRooms = filterForm.querySelector('#housing-rooms');
const selectGuests = filterForm.querySelector('#housing-guests');

const filterData = (array) => {
  const newArray = [];
  array.forEach((object) => {
    if (selectType.value === 'any' || object.offer.type === selectType.value) {
      if (selectRooms.value === 'any' || object.offer.rooms.toString() === selectRooms.value) {
        if (selectGuests.value === 'any' || object.offer.guests.toString() === selectGuests.value) {
          if (selectPrice.value === 'any') {
            const findChecked = document.querySelectorAll('input:checked');
            console.log(object.offer.features);
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
                  newArray.push(object);}
                else {newArray.push(object);}
              } else {newArray.push(object);}
            } else {newArray.push(object);}
          }
        }
      }
    }});
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
