#include <iostream>
using namespace std;

int fibonacci(int n)
{
    if (n==0) return 0;
    if (n==1) return 1;
    int result = fibonacci(n-1) + fibonacci(n-2);
    return result;
}

int main() {
    // int n;
    // cin >> n;
    int fib = fibonacci(10);
    cout << fib;

    // int a = 0, b = 1;
    // cout << a << " ";
    // if (n > 1) cout << b << " ";

    // for (int i = 2; i < n; i++) {
    //     int next = a + b; // 0+1
    //     cout << next <<" ";
    //     a = b;
    //     b = next;
    // }

    cout << endl;
    return 0;
}