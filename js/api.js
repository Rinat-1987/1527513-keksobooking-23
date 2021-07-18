import {
  returnMarker
} from './map.js';

/*import {
  getValueType
} from './filter.js';*/

const GET_SERVER = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_SERVER = 'https://23.javascript.pages.academy/keksobooking';
const SIMILAR_MARKER_COUNT = 10;

const getData = (onSuccess, onError) => {
  fetch(GET_SERVER)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((arr) => {
      onSuccess(arr.slice(0, SIMILAR_MARKER_COUNT));
    })
    .catch((error) => {
      onError(error);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_SERVER,
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
