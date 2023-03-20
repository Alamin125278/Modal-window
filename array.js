let arr = [5, 45, 7, 9, 3, 47, 96, 56, 14, 555, 645, 45];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
