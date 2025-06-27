#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> dp;
int called =0;
int fibo(int n)
{
    // base case
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    // function body
    if(dp[n] != -1){
        return dp[n];
    }
    int result = fibo(n-1) + fibo(n-2);
    dp[n] = result;
    cout << "count: " << called++ << endl;
    return result;
}

int main()
{
    int n = 10;
    for (int i = 0; i < 25; i++)
    {
        dp.push_back(-1);
    }
    
    int res = fibo(n);
    cout << res;
    cout << endl;
}
