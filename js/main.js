import {
  activateForm,
  setUserFormSubmit
} from './form.js';

import {
  getData
} from './api.js';

import {
  renderData
} from './map.js';

import {
  showAlert,
  onSuccessFunctions
} from './util.js';

activateForm();
getData(renderData, showAlert);
setUserFormSubmit(onSuccessFunctions);
