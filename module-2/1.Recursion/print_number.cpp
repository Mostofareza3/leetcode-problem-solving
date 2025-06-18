#include <bits/stdc++.h>
using namespace std;

void print_numbers(int n){ 
    if(n==0) return;
    print_numbers(n-1);
	cout << n <<" ";
}
 
int fact(int n) {
    if (n == 0) return 1;
    return n * fact(n - 1); 
}

int sum(int n){
    if(n== 0) return 0;
    return n + sum(n-1);
}

int main()
{
    print_numbers(10);
    cout <<endl <<endl;
    int n = 5;
    int factOfN = fact(n);
    int sumOfN = sum(10);
    cout << "Factorial of " << n << " is: " << factOfN << endl;
    cout << "Sum of " << n << " is: " << sumOfN << endl;
    return 0;

}