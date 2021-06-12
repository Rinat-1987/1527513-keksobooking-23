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

const x = getRandomIntegerInRange (1, 10) {
  if (getRandomIntegerInRange < 10) {
    '0' + x;
  }
};

const avatarAuthor = {
  avatar: 'img/avatars/user{{x}}.png',
};


//Автоматизирую
/*const getAuthor = function () {
  const getRandomIntegerInRange = _.random (0, AVATARS.length -1);

  return {
    avatar: AVATAR['img/avatars/user01.png'],
  };
};*/


// 1. Создать массив из 10 объектов, используя мои функции.
// 2. В объекте должна быть следующая структура:
// 3. author, объект — описывает автора. Содержит одно поле: avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
// 4. номер строки должен случайно генерироваться
// 5. offer, объект — содержит информацию об объявлении. Состоит из полей:

/*title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

price, число — стоимость. Случайное целое положительное число.

type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// 6. location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.*/





/* 1. Создать объект author, он описывает автора.
   2. Содержит одно поле: avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10.
   3. Перед однозначными числами ставится 0. Например, 01, 02...10.
   4. Адреса изображений не повторяются */
