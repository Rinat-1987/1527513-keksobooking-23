import {
  createAdvertisements
} from './data.js';

import {
  renderPopup
} from './popup.js';

import {
  activateForm
} from './form.js';


const advertisements = createAdvertisements(10);
const firstAdvertisement = advertisements[0];
renderPopup(firstAdvertisement);

activateForm();

