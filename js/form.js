import {
  isEscEvent
} from './util.js';

import {
  sendData
} from './api.js';

import {
  returnMarker
} from './map.js';

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
const formReset = adForm.querySelector('.ad-form__reset');
const address = adForm.querySelector('#address');

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

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const validateGuestsAndRooms = () => {
  if (quantityRoom.value === QUANTITY_ROOM_MAX) {
    if (capacity.value === CAPACITY_MIN) {
      quantityRoom.setCustomValidity('');
    } else {
      quantityRoom.setCustomValidity('Укажите "Не для гостей"');
    }
  } else if (capacity.value === CAPACITY_MIN) {
    quantityRoom.setCustomValidity('Укажите 100 комнат');
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

function onPopupEscKeydown (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    return closeModal();
  }
}

function onPopupClick () {
  // eslint-disable-next-line no-use-before-define
  return closeModal();
}

const openModalSuccess = () => {
  const popupSuccess = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupSuccess);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

const closeModal = () => {
  document.body.lastElementChild.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
};

const openModalError = () => {
  const popupError = errorTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupError);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

const openModal = () => {
  openModalError();
  adForm.setAttribute('autocomplete', 'on');
};

formReset.addEventListener('click', () => {
  returnMarker();
  mapForm.reset();
});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {onSuccess(),evt.target.reset();},
      () => openModal(),
      new FormData(evt.target),
    );
  });
};

export {
  openModalSuccess,
  activateForm,
  setUserFormSubmit,
  adForm,
  address,
  formReset
};
