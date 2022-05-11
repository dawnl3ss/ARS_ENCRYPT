#include <iostream>
#include "crypt/CipherCrypt.cpp"
using namespace std;

int main() {
    CipherCrypt cipher;
    cout << cipher->get_sec();
    return 0;
}

