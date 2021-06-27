// Здесь будет генерация объявлений
import {createAdvertisements, APARTAMENTS, TYPES, author, avatar} from './data.js';

const renderingAdvertisements = () => {
  const obj = createAdvertisements(5);
  const templateFragment = document.querySelector('#card').content;
  const mapRendering = document.querySelector('.map__canvas');

  const avatar = templateFragment.querySelector('.popup__avatar');
  avatar.src = obj.author.avatar;
  mapRendering.appendChild(avatar);

  const title = templateFragment.querySelector('.popup__title');
  title.textContent = obj.offer.title;
  mapRendering.appendChild(title);

  const address = templateFragment.querySelector('.popup__text--address');
  address.textContent = obj.offer.address;
  mapRendering.appendChild(address);

  const price = templateFragment.querySelector('.popup__text--price');
  const priceSpan = templateFragment.querySelector('span');
  price.textContent = `${obj.offer.price} ${priceSpan.textContent}`;
  mapRendering.appendChild(price);

  const type = templateFragment.querySelector('.popup__type');
  //Ищу какой индекс массива был получен в свойстве type
  const randomType = APARTAMENTS.indexOf(obj.offer.type);
  type.textContent = TYPES[randomType];
  mapRendering.appendChild(type);

  const quantityRoomsQuests = templateFragment.querySelector('.popup__text--capacity');
  quantityRoomsQuests.textContent = `${obj.offer.rooms} комнаты для ${obj.offer.guests} гостей`;
  mapRendering.appendChild(quantityRoomsQuests);

  const check = templateFragment.querySelector('.popup__text--time');
  check.textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;
  mapRendering.appendChild(check);

  const featureListElement = templateFragment.querySelector('.popup__features');
  const modifiers = obj.offer.features.map((feature) => `popup__feature--${feature}`);

  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
  const modifier = item.classList[1];
    if (! modifiers.includes(modifier)) {
      item.remove();
    }
  });
  mapRendering.appendChild(featureListElement);

  const description = templateFragment.querySelector('.popup__description');
  const descriptionRendering = () => {
//Если строка пустая, то удали поле description
    if (! obj.offer.description === '') {
      description.textContent = obj.offer.description;
      return description.textContent;
    } else {description.remove;}
  };
  //mapRendering.appendChild(descriptionRendering());

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
  mapRendering.appendChild(photos);
  return mapRendering;
};

export {renderingAdvertisements};
