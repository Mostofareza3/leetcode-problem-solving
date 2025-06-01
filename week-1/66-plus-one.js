/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

*/


/* 
var plusOne = function(digits) {
    if(digits.length === 0) return
    let str= String(digits[0])

    if(digits[digits.length-1] === 9){
      return [...digits.slice(0,digits.length-1), 1, 0]
      
    }

    for(let i=1; i<= digits.length-1; i++){
      str = str+ digits[i]
    }
    let newStr= BigInt(str)
    const newArr = []
    let strArr = String(newStr).split("")
    for(let j=0; j<strArr.length; j++){
      let conN = Number(strArr[j])
      if(j==strArr.length-1){
        newArr.push(conN+1)
      }else{
newArr.push(conN)}
    }
    return newArr
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOne([9,9]))
*/


// var plusOne = function(digits) {
//   let carry = 1; // Start with 1 since we're adding one
//   let newArr = [];

//   for (let i = digits.length - 1; i >= 0; i--) {
//     let sum = digits[i] + carry;
//     if (sum === 10) {
//       newArr.unshift(0);
//       carry = 1;
//     } else {
//       newArr.unshift(sum);
//       carry = 0;
//     }
//   }

//   if (carry === 1) {
//     newArr.unshift(1);
//   }

//   return newArr;
// };

var plusOne = function(digits) {

  let carry=0;
  let newArr=[]
  for(let i=digits.length-1; i>= 0; i--){
    if(digits[i]+ 1 === 10){
      newArr.unshift(0)
      carry=1
    }else{
      newArr[digits.length]+1
    }
  }
  if(carry){
    newArr.shift(carry)
  }

  return newArr
    
};

console.log(plusOne([9,9,9]))