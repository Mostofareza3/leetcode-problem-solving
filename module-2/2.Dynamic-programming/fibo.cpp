#include <bits/stdc++.h>
using namespace std;


int dp[25];

int fibonacci(int n)
{
    if (n==0) return 0;
    if (n==1) return 1;
    // check if already calculated
    if(dp[n] != -1){
        return dp[n];
    }
    // if not calculated
    int result = fibonacci(n-1) + fibonacci(n-2);
    dp[n] = result;
    return result;
}

int main() {
    for (int i = 0; i < 25; i++)
    {
        dp[i] = -1;
    }
    
    int fib = fibonacci(10);
    cout << fib;

    cout << endl;
    return 0;
}