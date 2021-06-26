import {createAdvertisement, SIMILAR_ADVERTISEMENT_CONST} from './data.js';
import {mapRendering} from './popup.js';

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
similarAdvertisement;
mapRendering;
