import {
  activateForm,
  setUserFormSubmit,
  openModalSuccess
} from './form.js';

import {
  getData
} from './api.js';

import {
  showAlert
} from './util.js';

import {
  getValueType,
  getValuePrice
} from './filter.js';

import {
  renderData
} from './map.js';

activateForm();

getData((array) => {
  renderData(array), showAlert;
  getValueType(array);
  getValuePrice(array);
});

setUserFormSubmit(openModalSuccess);


/*getData((array) => {
  getValueType(
    array,
    () => renderData(array));
});*/
//getData(renderData);
//getData((array) => {
//  renderData(array);
