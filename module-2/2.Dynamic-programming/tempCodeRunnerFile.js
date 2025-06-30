

// sum using recustoin



// function sum(nums, i){
//     // base case 
//     if(nums.length === 0) return 0;
//     const lastDigit = nums.pop()
//     const result =  lastDigit + sum(nums, i);
//     return result
// }

// const result = sum([1,2,3,4,5,6], 0);
// console.log(result)


function calculate(nums, i = 0) {
    if (i === nums.length) return 0;
    return nums[i] + calculate(nums, i);
}

var rob = function() {
    const arr = [2,7,9,3,1];
    const res = calculate(arr, 0);
    const res2 = calculate(arr, 1);
    console.log(res, res2)
    return res;
};
rob()


// function sum(nums, i = 0) {
//     if (i === nums.length) return 0;
//     return nums[i] + sum(nums, i + 1);
// }

// const result = sum([1, 2, 3, 4, 5]);
// console.log(result); // Output: 15