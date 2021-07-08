import {
  activateForm
} from './form.js';

import {
  map
} from './map.js';

import {
  createAdvertisements
} from './data.js';

const newAdvertisement = createAdvertisements(10);

/*const newObject = newAdvertisement.map((obj) => {
  obj.location;
});*/


newAdvertisement.forEach((obj) => {
  const newObject = obj.location;
  console.log(newObject);
});

activateForm();
map;
