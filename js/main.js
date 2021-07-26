import {
  activateForm,
  setUserFormSubmit,
  openModalSuccess
} from './form.js';

import {
  getData
} from './api.js';

import {
  cbFormChange
} from './filter.js';

import {
  renderData
} from './map.js';

import './avatar.js';

const RERENDER_DELAY = 500;

activateForm();

getData((array) => {
  renderData(array);
  cbFormChange(_.debounce(
    () => renderData(array),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(openModalSuccess);
