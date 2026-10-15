function printArray(arr) {
  for (let row = 0; row < arr.length; row++) {
    let line = "|";
    for (let col = 0; col < arr[row].length; col++) {
      line += " " + arr[row][col];
    }
    line += " |";
    console.log(line);
  }
}

function reverseArray(arr) {
  const lastIdx = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[lastIdx - i];
    arr[lastIdx - i] = temp;
  }
  return arr;
}

function rotateArray(originalArray) {
  const arr = reverseArray(originalArray);
  for (let row = 0; row < arr.length; row++) {
    for (let col = row + 1; col < arr[row].length; col++) {
      const element = arr[row][col];
      arr[row][col] = arr[col][row];
      arr[col][row] = element;
    }
  }
  return arr;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const finalArray = rotateArray(rotateArray(rotateArray(rotateArray(arr))));

for (let i = 0; i < 5; i++) {
  printArray(arr);
  console.log();
  arr = rotateArray(arr);
}
