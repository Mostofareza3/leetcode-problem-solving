#include <bits/stdc++.h>
using namespace std;

int fact(int n)
{

    if (n == 0)
        return 1;
    int result = n * fact(n - 1);
    return result;
}

int fibonacci(int n)
{
    if (n==0) return 0;
    if (n==1) return 1;

    int result = fibonacci(n-1) + fibonacci(n-2);
    return result;
}

void print_reverse(int n){ //25
	//base case
	if(n==0) return;
 
	//function body
	int last_digit = n%10; //5
	n/=10; //2
	print_reverse(n);
	cout<<last_digit<<" ";
}
 

int main()
{
    print_reverse(12345);
    // cout << fact(5);
    cout <<endl;
    // cout <<"Fibonacci:" << fibonacci(10);

}

// Fibonacchi
