// O(N logN)

const array = require('./randomArray');

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = j = 0;

  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push((arrFirst[i] < arrSecond[j]) ? arrFirst[i++] : arrSecond[j++])
  }

  return [
    ...arrSort,
    ...arrFirst.slice(i),
    ...arrSecond.slice(j)
  ];
}

const mergeSort = (arr) => {
  if (!arr || !arr.length) {
    return null
  }
  
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);

  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(array));
