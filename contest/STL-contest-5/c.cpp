#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> times;

    for (int i = 0; i < n; i++) {
        int h, m, s;
        cin >> h >> m >> s;
        times.push_back({h, m, s});
    }

    sort(times.begin(), times.end()); 

    for (auto time : times) {
        cout << time[0] << " " << time[1] << " " << time[2] << endl;
    }

    return 0;
}