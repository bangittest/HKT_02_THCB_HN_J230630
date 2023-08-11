// cách1:
let arr = [3, 25, 38, 49, 12]
// for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let b = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = b
//         }
//     }
// }
// console.log(arr);
// cách 2:

arr.sort((a, b) => b - a);
console.log(arr);