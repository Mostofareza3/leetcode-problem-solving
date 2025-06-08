#include <bits/stdc++.h>

using namespace std;

int main()
{
    vector<int> v = {4, 1, 5, 6, 2, 3};

    priority_queue<int> pq;

    vector<int> sorted_v;

    for(int x: v){ // n(log n)
        pq.push(x);
    }

    reverse(sorted_v.begin(), sorted_v.end()); //n (log n)
    while (pq.size() > 0) 
    {
        sorted_v.push_back(pq.top());
        pq.pop();
    }
    
    for(int x: sorted_v){
        cout << x << " ";
    }
    
    

    // pq.push(1);
    // pq.push(5);
    // pq.push(3);
    // pq.push(11);

    // cout << pq.top() << endl; // 0(1)
    // pq.pop();                 // 0 (log n)
    // pq.push(66);              // 0(log n)

    // cout << "Top ->" << pq.top() << endl;
    // cout << "Size ->" << pq.size() << endl;

    // while (pq.size() > 0)
    // {
    //     pq.pop();
    // }
    // cout << "Size ->" << pq.size() << endl;
}