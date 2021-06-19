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

const similarAdvertisement = new Array(SIMILAR_ADVERTISEMENT_CONST).fill(null).map((currentValue, index) => createAdvertisement(index + 1));
similarAdvertisement;
