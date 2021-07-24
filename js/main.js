import {
  activateForm,
  setUserFormSubmit,
  openModalSuccess
} from './form.js';

import {
  getData
} from './api.js';

import {
  cbFormChange,
  filterData
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
    () => filterData(array),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(openModalSuccess);
