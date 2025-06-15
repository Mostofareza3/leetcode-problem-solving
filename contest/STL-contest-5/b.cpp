

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n, a, b;
        cin >> n >> a >> b;

        string s;
        cin >> s;

        int x = 0, y = 0; 
        set<pair<int, int>> visited;

        visited.insert({x, y});

        bool found = false;
        for (int i = 0; i < 1000; i++)
        {
            char move = s[i % n]; // Repeat s forever
            if (move == 'N')
                y++;
            else if (move == 'S')
                y--;
            else if (move == 'E')
                x++;
            else if (move == 'W')
                x--;

            if (x == a && y == b)
            {
                found = true;
                break;
            }
        }

        if (found)
            cout << "YES\n";
        else
            cout << "NO\n";
    }

    return 0;
}

// #include <iostream>
// #include <string>
// using namespace std;

// int main() {
//     string s = "NENEWSNESENWES"; // Alice's repeating movement
//     int n = s.length();

//     int steps = 20; // simulate 20 steps
//     int x = 0, y = 0; // Alice's starting position

//     cout << "Step | Move | Position (x, y)" << endl;
//     cout << "-----------------------------" << endl;

//     for (int i = 0; i < steps; i++) {
//         char move = s[i % n]; // Repeat the pattern
//         if (move == 'N') y++;
//         else if (move == 'S') y--;
//         else if (move == 'E') x++;
//         else if (move == 'W') x--;

//         cout << " " << i+1 << "   |  " << move << "   | (" << x << ", " << y << ")" << endl;
//     }

//     return 0;
// }