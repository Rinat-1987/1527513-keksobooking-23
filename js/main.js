import {createAdvertisement} from './data.js';

const SIMILAR_ADVERTISEMENT_CONST = 10;

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
similarAdvertisement;
