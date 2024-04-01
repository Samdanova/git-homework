// const randomNumbers = [2, 4, 5, 7, 3, 0, 1];

// function greatNumbers(array, num) {
//   const result = array.filter((item) => item > num);
//   return result;
// }

// console.log(greatNumbers(randomNumbers, 4));

const numbers = [1, 6, 5, 4, 2, 9, 64];
function sumNumbers(array) {
  return array.reduce((acc, num) => (acc += num));
}
console.log(sumNumbers(numbers));

const getSum2 = (array) => {
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    const currentNum = array[index];
    result += currentNum;
  }
  return result;
};

console.log(getSum2(numbers));
