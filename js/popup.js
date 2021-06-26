// Здесь будет генерация объявлений
import {createAdvertisement, APARTAMENTS, TYPES} from './data.js';

const obj = createAdvertisement(5);
const templateFragment = document.querySelector('#card').content;
const title = templateFragment.querySelector('.popup__title');
title.textContent = obj.offer.title;

const address = templateFragment.querySelector('.popup__text--address');
address.textContent = obj.offer.address;

const price = templateFragment.querySelector('.popup__text--price');
const priceSpan = templateFragment.querySelector('span');
price.textContent = `${obj.offer.price} ${priceSpan.textContent}`;

const type = templateFragment.querySelector('.popup__type');
//Ищу какой индекс массива был получен в свойстве type
const randomType = APARTAMENTS.indexOf(obj.offer.type);
type.textContent = TYPES[randomType];

const quantityRoomsQuests = templateFragment.querySelector('.popup__text--capacity');
quantityRoomsQuests.textContent = `${obj.offer.rooms} комнаты для ${obj.offer.guests} гостей`;

const check = templateFragment.querySelector('.popup__text--time');
check.textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;

const featureListElement = templateFragment.querySelector('.popup__features');
const modifiers = obj.offer.features.map((feature) => `popup__feature--${feature}`);

featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
  const modifier = item.classList[1];
  if (! modifiers.includes(modifier)) {
    item.remove();
  }
});

const description = templateFragment.querySelector('.popup__description');
const descriptionRendering = () => {
//Если строка пустая, то удали поле description
  if (! obj.offer.description === '') {
    description.textContent = obj.offer.description;
    return description.textContent;
  } else {description.remove;}
};
descriptionRendering();

const photos = templateFragment.querySelector('.popup__photos');
const photo = templateFragment.querySelector('.popup__photo');
//Cохраняю количество элементов в свойстве photos
const outputPhotos = obj.offer.photos.length;

for (let i = 0; i <= outputPhotos; i++) {
  //Клонирую тег img со всем содержимым пока их количество не будет равно outputPhotos
  const image = photo.cloneNode(true);
  //Записываю в src значение из объекта photos
  photo.src = obj.offer.photos[i];
  photos.appendChild(image);
}

const avatar = templateFragment.querySelector('.popup__avatar');
avatar.src = obj.author.avatar;

//Добавляю title в разметку
const mapRendering = document.querySelector('.map__canvas');
mapRendering.appendChild(title);

export {title, address, price, type, quantityRoomsQuests, check, featureListElement, description, descriptionRendering, photos, avatar, mapRendering};
