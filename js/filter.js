import {
  clearLayers
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

const filteringType = (object) => {
  if (selectType.value === VALUE_ANY) {
    return true;
  } else if (object.offer.type === selectType.value) {
    return true;
  } else {
    return false;
  }
};

const filteringPrice = (object) => {
  if (selectPrice.value === VALUE_ANY) {
    return true;
  } else if (object.offer.price < FIRST_PRICE_CATEGORY && selectPrice.value === LOW_PRICE_VALUE) {
    return true;
  } else if (object.offer.price >= FIRST_PRICE_CATEGORY && object.offer.price < SECOND_PRICE_CATEGORY && selectPrice.value === MIDDLE_PRICE_VALUE) {
    return true;
  } else if (object.offer.price >= SECOND_PRICE_CATEGORY && selectPrice.value === HIGH_PRICE_VALUE) {
    return true;
  } else {
    return false;
  }
};

const filteringRooms = (object) => {
  if (selectRooms.value === VALUE_ANY) {
    return true;
  } else if (object.offer.rooms.toString() === selectRooms.value) {
    return true;
  } else {
    return false;
  }
};

const filteringGuests = (object) => {
  if (selectGuests.value === VALUE_ANY) {
    return true;
  } else if (object.offer.guests.toString() === selectGuests.value) {
    return true;
  } else {
    return false;
  }
};

const filteringFeauters = (object) => {
  const checkedFeatures = filterForm.querySelectorAll('.map__checkbox:checked');
  if (checkedFeatures.length === 0) {
    return true;
  } else if (object.offer.features === undefined) {
    return false;
  }
  return [].every.call(checkedFeatures, (element) => object.offer.features.includes(element.value));
};

const cbFormChange = (cb) => {
  filterForm.addEventListener('change', () => {
    clearLayers();
    cb();
  });
};

export {
  filteringType,
  filteringPrice,
  filteringRooms,
  filteringGuests,
  filteringFeauters,
  cbFormChange
};
