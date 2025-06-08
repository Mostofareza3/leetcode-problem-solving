/* 
Given a sequence of opening and closing parentheses ("(" and ")") you will have to determine if it is a valid one.

A sequence of parentheses is considered valid if every opened parenthesis has a closing parenthesis appearing after it. And, there are no unpaired parenthesis in the sequence.

Input
The input will contain a string of opening and closing parentheses. The string will be no longer than 25 characters.

Output
Print "Yes" if the input string contains a valid sequence of parentheses. Otherwise, print "No".
 */

#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;
    stack<char> st;
    bool valid = true;

    for(char c: s){
        if(c == '('){
            st.push(c);
        }else{
            if(st.empty()){
                valid = false;
                break;
            }else{
                st.pop();
            }
        }
    }

    if(!st.empty()) valid =false;
    if(valid) cout << "YES\n";
    else cout << "NO\n";

}
