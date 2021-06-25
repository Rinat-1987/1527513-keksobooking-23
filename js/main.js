//import {createAdvertisement} from './data.js';

const SIMILAR_ADVERTISEMENT_CONST = 10;

//const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
//similarAdvertisement;

//const createAdvertisements = (count) => new Array(count).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
//createAdvertisements();

const APARTAMENTS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ENTRIES = ['12:00', '13:00', '14:00'];
const SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_APARTMENTS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TYPES = ['Дворец', 'Квартира', 'Дом', 'Бунгало', 'Отель'];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const COORDINATES_DECIMAL_PLACES = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const getRandomIntegerInRange = (min, max) => {
    if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    throw new Error('Введите второе число больше первого, числа должны быть равны или больше 0');
  };
  
  const getRandomFloatNumberInRange = (min, max, decimalPlaces) => {
    if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
      const number = Math.random() * (max - min + 1) + min;
      return Number(number.toFixed(decimalPlaces));
    }
    throw new Error('Числа должны быть равны или больше 0');
  };
  
  const getRandomArrayElement = (array) => {
    return array[getRandomIntegerInRange(0, array.length - 1)];
  };
  
  //Функция, которая возвращает случайный массив на основе другого массива
  const getRandomArray = (array) => {
    return array.slice(getRandomIntegerInRange(0, array.length -1));
  };

const createAdvertisement = (userNumber) => {
    const location = {
      lat: getRandomFloatNumberInRange(LAT_MIN, LAT_MAX, COORDINATES_DECIMAL_PLACES),
      lng: getRandomFloatNumberInRange(LNG_MIN, LNG_MAX, COORDINATES_DECIMAL_PLACES),
    };
    return {
      author: {
        avatar: `img/avatars/user${userNumber < 10 ? `0${userNumber}.png` : `${userNumber}.png`}`,
      },
      offer: {
        title: 'Аренда жилья',
        address: `${location.lat}, ${location.lng}`,
        price: getRandomIntegerInRange(500, 10000),
        type: getRandomArrayElement(APARTAMENTS),
        rooms: getRandomIntegerInRange(1, 5),
        guests: getRandomIntegerInRange(1, 5),
        checkin: getRandomArrayElement(ENTRIES),
        checkout: getRandomArrayElement(ENTRIES),
        features: getRandomArray(SERVICES),
        description: 'У нас самые комфортные условия проживания!',
        photos: getRandomArray(PHOTOS_APARTMENTS),
      },
      location,
    };
  };

const obj = createAdvertisement();
const templateFragment = document.querySelector('#card').content;
const title = templateFragment.querySelector('.popup__title');
title.textContent = obj.offer.title;

const address = templateFragment.querySelector('.popup__text--address');
address.textContent = obj.offer.address;

const price = templateFragment.querySelector('.popup__text--price');
const priceSpan = templateFragment.querySelector('span');
price.textContent = `${obj.offer.price} ${priceSpan.textContent}`;

const type = templateFragment.querySelector('.popup__type');
const randomType = APARTAMENTS.indexOf(obj.offer.type);

TYPES.forEach((item) => {
  if (randomType === TYPES[item]) {
    type.textContent = TYPES[item];
  }
});

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
description.textContent = obj.offer.description;

const photos = templateFragment.querySelector('.popup__photos');

for (let i = 0; i < PHOTOS_APARTMENTS.length; i++) {
  if (photos.children.length === i) {
    const image = photos.cloneNode(true);
    console.log(image);
  }
}
//photos.src = 

console.log(description.textContent);
