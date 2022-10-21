function getMinMax(str) {
  let arr = str.split(" ");
  let newArr = [];
  let result = {};

  for (let i = 0; i < arr.length; ++i) {
      if (!isNaN(arr[i])) {
          newArr.push(parseFloat(arr[i]));
      }
  }

  let min = newArr[0];
  let max = min;

  for (let i = 1; i < newArr.length; ++i) {
      if (newArr[i] > max) {
          max = newArr[i];
      }

      if (newArr[i] < min) {
          min = newArr[i];
      }
  }

  result.min = min;
  result.max = max;
  return result;
}
