#include <iostream>
#include "crypt/CipherCrypt.cpp"
using namespace std;

int main() {
    CipherCrypt cipher {"test", 1, "azeaezae", "test"};
    cout << cipher.get_sec();
    return 0;
}

