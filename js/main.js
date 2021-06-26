import {createAdvertisement, SIMILAR_ADVERTISEMENT_CONST} from './data.js';
import {title, address, price, type, quantityRoomsQuests, check, featureListElement, description, descriptionRendering, photos, avatar, mapRendering} from './popup.js';

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
similarAdvertisement;
title;
address;
price;
type;
quantityRoomsQuests;
check;
featureListElement;
description;
descriptionRendering;
photos;
avatar;
mapRendering;
