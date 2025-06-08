/* 
You are given a binary string 𝑠
 (a string consisting only of 0-s and 1-s).

You can perform two types of operations on 𝑠
:

delete one character from 𝑠
. This operation costs 1
 coin;
swap any pair of characters in 𝑠
. This operation is free (costs 0
 coins).
You can perform these operations any number of times and in any order.

Let's name a string you've got after performing operations above as 𝑡
. The string 𝑡
 is good if for each 𝑖
 from 1
 to |𝑡|
 𝑡𝑖≠𝑠𝑖
 (|𝑡|
 is the length of the string 𝑡
). The empty string is always good. Note that you are comparing the resulting string 𝑡
 with the initial string 𝑠
.

What is the minimum total cost to make the string 𝑡
 good?

Input
The first line contains a single integer 𝑡
 (1≤𝑡≤104
) — the number of test cases. Then 𝑡
 test cases follow.

The only line of each test case contains a binary string 𝑠
 (1≤|𝑠|≤2⋅105
; 𝑠𝑖∈{
0, 1}
) — the initial string, consisting of characters 0 and/or 1.

Additional constraint on the input: the total length of all strings 𝑠
 doesn't exceed 2⋅105
.

Output
*/