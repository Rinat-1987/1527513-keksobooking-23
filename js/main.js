import {
  activateForm,
  setUserFormSubmit
} from './form.js';

import {
  createFetch
} from './create-fetch.js';

import {
  renderData
} from './map.js';

import {
  showAlert
} from './util.js';

activateForm();
createFetch(renderData, showAlert);
setUserFormSubmit();
