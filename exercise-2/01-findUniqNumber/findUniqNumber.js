/**
 * Описание: найти уникальное число в массиве чисел
 * Ожидаемый результат: findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;
 * @param {Array<number>} arr - Array
 * @returns {Number}
 */
const findUniqNumber = arr => {
  const uniqNumbersCount = {};
  arr.forEach((number) => {
    if (!uniqNumbersCount[number]) {
      uniqNumbersCount[number] = 1;
    } else {
      uniqNumbersCount[number] += 1;
    }
  });
  for (const [number, count] of Object.entries(uniqNumbersCount)) {
    if (count === 1) {
      return number;
    }
  }
}

module.exports = findUniqNumber;