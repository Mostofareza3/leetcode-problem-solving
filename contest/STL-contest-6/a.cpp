#include <bits/stdc++.h>
using namespace std;

void printStack(stack<char> s) {
    while (!s.empty()) {
        cout << s.top();
        s.pop();
    }
    cout << endl;
}

int main() {
    string str;
    cin >> str;
    stack<char> stk;
    reverse(str.begin(), str.end());
    for(auto ch : str){
        if(!stk.empty() && stk.top() == ch){
            stk.pop();
        }else{
            stk.push(ch);
        }
    }

    printStack(stk);

    return 0;
}