//Здесь будет форма

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormSelects = mapForm.querySelectorAll('select');
const mapFormFieldset = mapForm.querySelector('.map__features');

adForm.classList.add('ad-form--disabled');
for (let index = 0; index < adFormFieldsets.length; index++) {
  adFormFieldsets[index].setAttribute('disabled', 'disabled');
}

mapForm.classList.add('map__filters--disabled');
for (let index = 0; index < mapFormSelects.length; index++) {
  mapFormSelects[index].setAttribute('disabled', 'disabled');
}
mapFormFieldset.setAttribute('disabled', 'disabled');

const activeForm = () => {
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

export {
  activeForm
};
