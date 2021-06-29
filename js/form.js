//Здесь будет форма
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
const optionRooms = quantityRoom.children;
const capacity = adForm.querySelector('#capacity');
const optionCapacities = capacity.children;

if (optionRooms[0].hasAttribute('selected')) {
  optionCapacities[0].setAttribute('disabled', 'disabled');
  optionCapacities[1].setAttribute('disabled', 'disabled');
  optionCapacities[3].setAttribute('disabled', 'disabled');
}

/*optionCapacities.forEach((index) => {
  if (quantityRoom.value = 1) {
    const valOne = optionCapacities[index];
     if (valOne.innerHTML = '1 комната') {
      valOne.setAttribute('selected', 'selected');
     }
  }
});*/

export {activateForm};
