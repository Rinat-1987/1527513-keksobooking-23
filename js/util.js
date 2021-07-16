import {
  ALERT_SHOW_TIME
} from './data.js';

import {
  adForm
} from './form.js';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onPopupEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    return closeModal();
  }
};

function onPopupClick () {
  return closeModal();
}

const openModalSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
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
  const successTemplate = document.querySelector('#error').content.querySelector('.error');
  const popupError = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupError);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

const buttonReset = () => {
  document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
    evt.target.reset;
  });
};

const onFailFunctions = () => {
  openModalError();
  adForm.setAttribute('autocomplete', 'on');
};

export {
  showAlert,
  onFailFunctions,
  buttonReset,
  openModalSuccess,
  closeModal
};
