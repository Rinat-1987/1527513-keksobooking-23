let getRandomNumber = function (min, max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  if (max <= min) {
    console.log ('Введите второе число больше первого, числа должны быть равны или больше 0');
    return;
  };
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomCoordinates = function (min, max, decimalPlaces) {
  min = Math.ceil(0);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (max <= min) {
    console.log ('Числа должны быть равны или больше 0');
    return;
  };
  return number.toFixed(decimalPlaces);
};
