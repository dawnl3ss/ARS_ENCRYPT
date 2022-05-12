#include <iostream>
#include "crypt/CipherCrypt.cpp"
#include "standard/StandardSecurity.cpp"
using namespace std;

int main() {
    CipherCrypt cipher {"test", 1, "azeaezae", "test"};
    struct StandardSecurity sec;
    
    cout << sec.STANDARD_SEC_1 << endl;
    
    return 0;
}

