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
  array.forEach((obj) => {
    if (selectType.value === 'any' || obj.offer.type === selectType.value) {
      if (selectRooms.value === 'any' || obj.offer.rooms.toString() === selectRooms.value) {
        if (selectGuests.value === 'any' || obj.offer.guests.toString() === selectGuests.value) {
          if (selectPrice.value === 'any') {
            const findChecked = document.querySelectorAll('input:checked');
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
            newArray.push(obj);
          } else if (obj.offer.price < FIRST_PRICE_CATEGORY && selectPrice.value === 'low') {
            const findChecked = document.querySelectorAll('input:checked');
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
            newArray.push(obj);
          } else if (obj.offer.price >= FIRST_PRICE_CATEGORY && obj.offer.price < SECOND_PRICE_CATEGORY && selectPrice.value === 'middle') {
            const findChecked = document.querySelectorAll('input:checked');
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
            newArray.push(obj);
          } else if (obj.offer.price >= SECOND_PRICE_CATEGORY && selectPrice.value === 'high') {
            const findChecked = document.querySelectorAll('input:checked');
            if (object.offer.features) {
              if (findChecked.length > 0) {
                if (findChecked.forEach((element) => {object.offer.features.includes(element.value);})) {
            newArray.push(obj);
          }
        }
      }
    }
  });
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
