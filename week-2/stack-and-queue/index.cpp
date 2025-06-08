#include <bits/stdc++.h>
using namespace std;

int main()
{
    stack<int> st;
    st.push(1);
    st.push(2);
    st.push(4);
    st.pop();

    cout << st.top() << "->" << st.size() <<endl;

}
