#include <bits/stdc++.h>
using namespace std;


int n;
int arr[20];

vector<int> current_subset;
void gen(int ind)
{
   // base case
   if(ind == n){
    for(int el : current_subset){
        cout << el <<" ";
    }
    cout <<endl;
    return;
   }

   // funtion body
   // don't take
   gen(ind+1);
   //take
   current_subset.push_back(arr[ind]);
   gen(ind+1);
   current_subset.pop_back();
}

int main()
{
    cin >> n;
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    gen(0);
    return 0;
}