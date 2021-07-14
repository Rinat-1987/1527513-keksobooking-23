import {
  ALERT_SHOW_TIME
} from './data.js';

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
  const popupSuccess = successTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', popupSuccess);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeMessageSuccess = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      document.querySelector('.success').classList.add('hidden');
    }
  });

  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.success').classList.add('hidden');
  });
};

const closeMessageError = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      document.querySelector('.error').classList.add('hidden');
    }
  });

  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.error').classList.add('hidden');
  });
};

const deleteEventListenerSuccess = () => {
  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      document.querySelector('.success').classList.add('hidden');
    }
  });

  document.removeEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.success').classList.add('hidden');
  });
};

const deleteEventListenerError = () => {
  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      document.querySelector('.error').classList.add('hidden');
    }
  });
};

const buttonReset = () => {
  document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.reset();
  });
};

export {
  showAlert,
  addMessageSuccess,
  addMessageError,
  closeMessageSuccess,
  deleteEventListenerSuccess,
  closeMessageError,
  deleteEventListenerError,
  buttonReset
};
