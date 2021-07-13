import {APARTAMENTS} from './data.js';

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;
const QUANTITY_ROOM_MAX = '100';
const CAPACITY_MIN = '0';

const housingPrices = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormSelects = mapForm.querySelectorAll('select');
const mapFormFieldset = mapForm.querySelector('.map__features');

adForm.classList.add('ad-form--disabled');
mapForm.classList.add('map__filters--disabled');
document.querySelector('.map__features').disabled = true;

const enableFormElements = (elements) => {
  elements.forEach((element) => {
    element.disabled = false;
  });
};

const disableFormElements = (elements) => {
  elements.forEach((element) => {
    element.disabled = true;
  });
};

disableFormElements(adFormFieldsets);
disableFormElements(mapFormSelects);

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');
  mapFormFieldset.removeAttribute('disabled');
  enableFormElements(adFormFieldsets);
  enableFormElements(mapFormSelects);
};

const titleInput = adForm.querySelector('#title');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    titleInput.setCustomValidity(`Еще ${ MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const priceInput = adForm.querySelector('#price');
priceInput.setAttribute('max', MAX_PRICE);

const quantityRoom = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');


const validateGuestsAndRooms = () => {
  if (quantityRoom.value === QUANTITY_ROOM_MAX) {
    if (capacity.value === CAPACITY_MIN) {
      quantityRoom.setCustomValidity('');
    } else {
      quantityRoom.setCustomValidity('Укажите "Не для гостей"');
    }
  } else if (quantityRoom.value >= capacity.value && capacity.value !== CAPACITY_MIN) {
    quantityRoom.setCustomValidity('');
  } else {
    quantityRoom.setCustomValidity('Укажите меньшее число гостей');
  }
  quantityRoom.reportValidity();
};

quantityRoom.addEventListener('change', () => {
  validateGuestsAndRooms();
});

capacity.addEventListener('change', () => {
  validateGuestsAndRooms();
});

const typeHousing = adForm.querySelector('#type');

typeHousing.addEventListener('change', () => {
  const price = housingPrices[typeHousing.value];
  priceInput.setAttribute('min', price);
  priceInput.setAttribute('placeholder', price);
});

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {
  activateForm
};
