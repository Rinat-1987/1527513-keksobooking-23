import {
  createAdvertisements
} from './data.js';

import {
  renderPopup
} from './popup.js';

const advertisement = createAdvertisements(10);
const firstAdvertisement = advertisement[0];
renderPopup(firstAdvertisement);

