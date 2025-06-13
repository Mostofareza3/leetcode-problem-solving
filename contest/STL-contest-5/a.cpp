#include <bits/stdc++.h>
using namespace std;

int main()
{
    pair<int, int> pr;
    cin >> pr.first >> pr.second;
    int result = pr.first + pr.second + (pr.first * pr.second);
    if (result == 111)
    {
        cout << "Yes";
    }
    else
    {
        cout << "No";
    }
}