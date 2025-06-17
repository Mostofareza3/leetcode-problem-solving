// #Brute Force
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> a(n);
    for (int &x : a)
        cin >> x;

    for (int i = 0; i < n; ++i)
    {
        int pos = 0; // default value (no smaller found)
        for (int j = i - 1; j >= 0; --j) // [0(N)^2]
        {
            if (a[j] < a[i])
            {
                pos = j + 1; // convert to 1-based index
                break;
            }
        }
        cout << pos << " ";
    }
    cout << endl;

    return 0;
}

// Using Stack [O(n)]