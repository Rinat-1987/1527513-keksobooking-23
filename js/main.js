const getRandomIntegerInRange = function (min, max) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new Error('Введите второе число больше первого, числа должны быть равны или больше 0');
};

getRandomIntegerInRange();

const getRandomFloatNumberInRange = function (min, max, decimalPlaces) {
  if (typeof min === 'number' && typeof max === 'number' && min >= 0 && max >= min) {
    const number = Math.random() * (max - min + 1) + min;
    return Number(number.toFixed(decimalPlaces));
  }
  throw new Error('Числа должны быть равны или больше 0');
};

getRandomFloatNumberInRange();

// Объявляю функцию для размещения объявления
//const createAdvertisement = () => {
//  return {

    // Создаю объект author
    const author = {
      avatar: 'img/avatars/user'
    };

    // Сохраняю в переменную вызов функции с параметрами
    const userNumber = getRandomIntegerInRange(1, 10);

    // Завожу пустую переменную
    let stringNumber;

    // Создаю функцию, которая сохранит в себя number 
    const avatarNumber = function () {
      if (userNumber < 10) {
        stringNumber = '0' + userNumber + '.png';
        return stringNumber;
      } else {
        stringNumber = userNumber + '.png';
        return stringNumber;
      }
    };

    // Обращаемся к свойству объекта и записываем в него результат функции для изменения свойства avatar
    author.avatar = author.avatar + avatarNumber;

    //Создаю массив для поля type
    const apartments = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
    const randomIndexApartments = getRandomIntegerInRange(0, apartments.length -1);
    const typeApartments = apartments[randomIndexApartments];

    //Создаю массив для поля checkin
    const entry = ['12:00', '13:00', '14:00'];
    const randomIndexEntry = getRandomIntegerInRange(0, entry.length -1);
    const checkinEntry = entry[randomIndexEntry];

    //Создаю массив для поля checkout
    const exit = ['12:00', '13:00', '14:00'];
    const randomIndexExit = getRandomIntegerInRange(0, exit.length -1);
    const checkoutExit = exit[randomIndexExit];

    //Создаю массив для поля features
    const services = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    const randomQuantityFeatures = getRandomIntegerInRange(0, services.length -1);
    //C помощью метода slice копирую часть массива
    const featuresServices = services.slice(randomQuantityFeatures);

    //Создаю массив для поля photos
    const photosApartments = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ];
    const randomQuantityPhotos = getRandomIntegerInRange(0, photosApartments.length -1);
    const photosRandom = photosApartments.slice(randomQuantityPhotos);

    // Создаю объект offer
    const offer = {
      title: 'Аренда жилья',
      address: '{{location.lat}}, {{location.lng}}',
      price: function (max) {
        return Math.floor(Math.random() * max);
      },
      type: typeApartments,
      rooms: function (max) {
        return Math.floor(Math.random() * max);
      },
      guests: function (max) {
        return Math.floor(Math.random() * max);
      },
      checkin: checkinEntry,
      checkout: checkoutExit,
      features: featuresServices,
      description: 'У нас самые комфортные условия проживания!',
      photos: photosRandom
    };

    // Обявляю переменные равные результату выполнения функций с параметрами
    const width = getRandomFloatNumberInRange(35.65000, 35.70000, 5);
    const length = getRandomFloatNumberInRange(139.70000, 139.80000, 5);

    // Создаю объект и сохраняю в него переменные
    const location = {
      lat: function () {
        return width;
      },
      lng: function () {
        return length;
      }
    };
//};