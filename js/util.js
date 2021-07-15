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

const addMessageSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const popupSuccess = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupSuccess);
};

const addMessageError = () => {
  const successTemplate = document.querySelector('#error').content.querySelector('.error');
  const popupError = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupError);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    document.body.lastElementChild.classList.add('hidden');
  }
};

const onPopupClick = () => {
  document.body.lastElementChild.classList.add('hidden');
};

const closeMessage = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

const deleteEventListenerSubmit = () => {
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
};

const buttonReset = () => {
  document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.reset();
  });
};

const onSuccessFunctions = () => {
  addMessageSuccess();
  closeMessage();
  deleteEventListenerSubmit();
};

const onFailFunctions = () => {
  addMessageError();
  adForm.setAttribute('autocomplete', 'on');
  closeMessage();
  deleteEventListenerSubmit();
};

export {
  showAlert,
  onFailFunctions,
  buttonReset,
  onSuccessFunctions
};
