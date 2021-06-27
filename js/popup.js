// Здесь будет генерация объявлений
import {
  APARTAMENTS,
  TYPES
} from './data.js';

const template = document.querySelector('#card').content;
const mapRendering = document.querySelector('.map__canvas');

const renderPopup = (advert) => {
  const templateFragment = template.cloneNode(true);
  const avatar = templateFragment.querySelector('.popup__avatar');
  avatar.src = advert.author.avatar;

  const title = templateFragment.querySelector('.popup__title');
  title.textContent = advert.offer.title;

  const address = templateFragment.querySelector('.popup__text--address');
  address.textContent = advert.offer.address;

  const price = templateFragment.querySelector('.popup__text--price');
  const priceSpan = price.querySelector('span');
  price.textContent = `${advert.offer.price} ${priceSpan.textContent}`;

  const type = templateFragment.querySelector('.popup__type');
  const typeLabel = APARTAMENTS.indexOf(advert.offer.type);
  type.textContent = TYPES[typeLabel];

  const quantityRoomsQuests = templateFragment.querySelector('.popup__text--capacity');
  quantityRoomsQuests.textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;

  const check = templateFragment.querySelector('.popup__text--time');
  check.textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;

  const featureListElement = templateFragment.querySelector('.popup__features');
  const modifiers = advert.offer.features.map((feature) => `popup__feature--${feature}`);

  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const description = templateFragment.querySelector('.popup__description');
  if (advert.offer.description) {
    description.textContent = advert.offer.description;
    description.textContent;
  } else {
    description.remove();
  }

  const photos = templateFragment.querySelector('.popup__photos');
  const photo = templateFragment.querySelector('.popup__photo');
  photos.innerHTML = '';
  const outputPhotos = advert.offer.photos.length;

  for (let index = 0; index <= outputPhotos; index++) {
    const image = photo.cloneNode(true);
    image.src = advert.offer.photos[index];
    photos.appendChild(image);
  }
  mapRendering.appendChild(templateFragment);
};

export {
  renderPopup
};
