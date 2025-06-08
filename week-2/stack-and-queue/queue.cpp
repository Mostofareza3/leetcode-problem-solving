#include <bits/stdc++.h>
using namespace std;

int main()
{
    queue<int> qu;
    qu.push(1);
    qu.push(2);
    qu.push(4);
    qu.pop();

    cout << qu.front();

}