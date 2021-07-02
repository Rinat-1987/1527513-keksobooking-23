const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormSelects = mapForm.querySelectorAll('select');
const mapFormFieldset = mapForm.querySelector('.map__features');

adForm.classList.add('ad-form--disabled');

adFormFieldsets.forEach((index) => {
  index.setAttribute('disabled', 'disabled');
});

mapForm.classList.add('map__filters--disabled');

mapFormSelects.forEach((index) => {
  index.setAttribute('disabled', 'disabled');
});

document.querySelector('.map__features').disabled = true;

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');
  mapFormFieldset.removeAttribute('disabled');
  for (let index = 0; index < adFormFieldsets.length; index++) {
    adFormFieldsets[index].removeAttribute('disabled');
  }
  for (let index = 0; index < mapFormSelects.length; index++) {
    mapFormSelects[index].removeAttribute('disabled');
  }
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

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE) {
    priceInput.setCustomValidity(`Укажите сумму меньше на ${MAX_PRICE - priceInput.value}`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const quantityRoom = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

quantityRoom.addEventListener('change', () => {
  if (quantityRoom.value === '100') {
    if (capacity.value === '0') {
      quantityRoom.setCustomValidity('');
    } else {
      quantityRoom.setCustomValidity('Укажите "Не для гостей"');
    }
  } else if (quantityRoom.value >= capacity.value && capacity.value !== '0') {
    quantityRoom.setCustomValidity('');
  } else {
    quantityRoom.setCustomValidity('Укажите меньшее число гостей');
  }
  quantityRoom.reportValidity();
});

capacity.addEventListener('change', () => {
  if (capacity.value === '0') {
    if (quantityRoom.value === '100') {
      capacity.setCustomValidity('');
    } else {
      capacity.setCustomValidity('Укажите большее число комнат');
    }
  } else if (capacity.value <= quantityRoom.value && quantityRoom.value !== '100') {
    capacity.setCustomValidity('');
  } else {
    capacity .setCustomValidity('Укажите большее число комнат');
  }
  capacity.reportValidity();
});

export {activateForm};

