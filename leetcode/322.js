/* 
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1,5,10,20,50,100,200,500,1000], amount=666

Input: coins = [1], amount = 0
Output: 0

*/

// type T = []
var coinChange = function (coins, amount) {
    // sort arr
    coins.sort((a, b) => b - a);

    let notes = 0, i = 0;
    const ans = []

    while (amount) {
        notes = amount / coins[i]
        while (notes--) {
            console.log(coins[i])
            // ans.push()
        }
        amount %= coins[i]
        i++
    }

    return ans
};


let coins = [1, 5, 10, 20, 50, 100, 200, 500, 1000], amount = 666;
console.log(coinChange(coins, amount));