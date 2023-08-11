// cách 2
// let array = [3, 4, 88, 99, 76, 8, 4, 5, 85, 63]
// console.log(Math.max(...array));


// cách 1
let array = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
function findMax(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

let max = findMax(array);
console.log(`giá trị lớn nhất là :` + max); 