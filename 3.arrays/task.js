function compareArrays(arr1, arr2) {
  return arr1.every(
    (item, idx, length) => item === arr2[idx] && arr1.length === arr2.length,
  );
}
console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function getUsersNamesInAgeRange(users, gender) {}
