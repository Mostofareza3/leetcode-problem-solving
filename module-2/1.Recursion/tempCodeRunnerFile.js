


function isAllSorted(arr, i) {
    // base case
    if(arr.length === 0) return;
    if(arr.length === 1) return arr[i]
    // body
    if(arr[arr.length-1] > arr[arr.length -2]){
        return true;
    }
    isAllSorted(arr, i+1)
    return false;
}

const arr = [1, 4, 5, 6, 7, 7, 9];
const arr2 = [1, 5, 3, 4];
isAllSorted(arr, 0)
isAllSorted(arr2, 0)