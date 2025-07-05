


function isAllSorted(arr, len) {
    // base case
    if (len === 0) return true;
    if (len === 1) return true
    // body
    return arr[len - 1] >= arr[len - 2] && isAllSorted(arr, len - 1)
}

const arr = [1, 4, 5, 6, 7, 7, 9];
const arr2 = [1, 5, 3, 4];
const res1 = isAllSorted(arr, arr.length)
const res2 = isAllSorted(arr2, arr.length)
console.log(res1, res2)