const APARTAMENTS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ENTRIES = ['12:00', '13:00', '14:00'];
const SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_APARTMENTS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const COORDINATES_DECIMAL_PLACES = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const SIMILAR_ADVERTISEMENT_CONST = 10;

const getRandomIntegerInRange = function (min, max) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('Введите второе число больше первого, числа должны быть равны или больше 0');
};

const getRandomFloatNumberInRange = function (min, max, decimalPlaces) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
    const number = Math.random() * (max - min + 1) + min;
    return Number(number.toFixed(decimalPlaces));
  }
  throw new Error('Числа должны быть равны или больше 0');
};

// Создаю объект author
let author = {
  avatar: 'img/avatars/user',
};

// Сохраняю в переменную вызов функции с параметрами
const userNumber = getRandomIntegerInRange(1, 10);

// Создаю функцию, которая сохранит в себя number
const avatarNumber = function () {
  let stringNumber;
  if (userNumber < 10) {
    stringNumber = '0' + userNumber + '.png';
    return stringNumber;
  } else {
    stringNumber = userNumber + '.png';
    return stringNumber;
  }
};

// Обращаемся к свойству объекта и записываем в него результат функции для изменения свойства avatar
author.avatar += avatarNumber();
author = author.avatar;

const randomIndexApartments = getRandomIntegerInRange(0, APARTAMENTS.length -1);
const typeApartments = APARTAMENTS[randomIndexApartments];
const randomIndexEntry = getRandomIntegerInRange(0, ENTRIES.length -1);
const checkinEntry = ENTRIES[randomIndexEntry];
const randomIndexExit = getRandomIntegerInRange(0, ENTRIES.length -1);
const checkoutExit = ENTRIES[randomIndexExit];
const randomQuantityFeatures = getRandomIntegerInRange(0, SERVICES.length -1);
const featuresServices = SERVICES.slice(randomQuantityFeatures);
const randomQuantityPhotos = getRandomIntegerInRange(0, PHOTOS_APARTMENTS.length -1);
const photosRandom = PHOTOS_APARTMENTS.slice(randomQuantityPhotos);
const lat = getRandomFloatNumberInRange(LAT_MIN, LAT_MAX, COORDINATES_DECIMAL_PLACES);
const lng = getRandomFloatNumberInRange(LNG_MIN, LNG_MAX, COORDINATES_DECIMAL_PLACES);

const coordinates = {
  lat,
  lng,
};

// Создаю объект offer
const offer = {
  title: 'Аренда жилья',
  address: '${coordinates.lat}, ${coordinates.lng}',
  price: getRandomIntegerInRange(500, 10000),
  type: typeApartments,
  rooms: getRandomIntegerInRange(1, 5),
  guests: getRandomIntegerInRange(1, 5),
  checkin: checkinEntry,
  checkout: checkoutExit,
  features: featuresServices,
  description: 'У нас самые комфортные условия проживания!',
  photos: photosRandom,
};

// Объявляю функцию для размещения объявления
const createAdvertisement = function () {
  return {
    author,
    offer,
  };
};

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map(() => createAdvertisement());

console.log(similarAdvertisement);
