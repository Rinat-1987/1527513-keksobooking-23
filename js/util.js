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

const getRandomArrayElement = (array) => array[getRandomIntegerInRange(0, array.length - 1)];

//Функция, которая возвращает случайный массив на основе другого массива
const getRandomArray = (array) => array.slice(getRandomIntegerInRange(0, array.length -1));

export {getRandomIntegerInRange, getRandomFloatNumberInRange, getRandomArrayElement, getRandomArray};
