import {
  renderPopup
} from './popup.js';

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((json) => {
    console.log('Результат', json[0]);
  })
  .then((json) => {
    renderPopup(json[0]);
  });
