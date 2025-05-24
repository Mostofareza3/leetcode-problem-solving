/* 
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/

// Brute Force Approach
var mySqrt = function(x) {
    if (x < 2) return x; // Handle base cases for 0 and 1

    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1; // Return the largest integer whose square is less than or equal to x
};


// Binary Search Approach
var mySqrt = function(x) {  
    if (x < 2) return x; // Handle base cases for 0 and 1

    let left = 2, right = Math.floor(x / 2);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid; // Found exact square root
        } else if (square < x) {
            left = mid + 1; // Move to the right half
        } else {
            right = mid - 1; // Move to the left half
        }
    }
    return right; // The largest integer whose square is less than or equal to x
}