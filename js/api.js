import {
  returnMarker
} from './map.js';

import {
  showAlert
} from './util.js';

const LOADING_SERVER = 'https://23.javascript.pages.academy/keksobooking/data';
const SENDING_SERVER = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(LOADING_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((array) => {
      onSuccess(array);
    })
    .catch((error) => {
      showAlert(error);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SENDING_SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        returnMarker();
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте еще раз');
    });
};

export {
  getData,
  sendData
};
