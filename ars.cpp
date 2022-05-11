#include <iostream>
#include "crypt/CipherCrypt.cpp"
#include "standard/StandardList.cpp"
using namespace std;

int main() {
    CipherCrypt cipher {"test", 1, "azeaezae", "test"};
    struct StandardList list;
    cout << list.CHAR_LIST[0];
    return 0;
}

