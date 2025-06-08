/* 
In this problem you have to find the permutations using the first N English capital letters. Since there can be many permutations, you have to print the first K.

Input
Input starts with an integer T (≤ 100), denoting the number of test cases.

Each case contains two integers N, K (1 ≤ N ≤ 26, 1 ≤ K ≤ 30).

Output
For each case, print the case number in a line. Then print the first K permutations that contain the first N English capital letters in alphabetical order. If there are less than K permutations then print all of them.
*/

function getFirstKPermutations(str, k) {
    const result = [];

    function permute(path, used) {
        if (result.length >= k) return; // stop early if we have enough
        if (path.length === str.length) {
            result.push(path);
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            permute(path + str[i], used);
            used[i] = false;
        }
    }

    const sortedStr = str.split('').sort().join(''); // ensure alphabetical order
    permute('', Array(str.length).fill(false));
    return result;
}