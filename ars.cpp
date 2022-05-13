#include <iostream>
#include "crypt/CipherCrypt.cpp"

int main() {
    CipherCrypt *cipher = new CipherCrypt("test", 2, "azeaezae", "test");

    std::cout << cipher->encrypt() << std::endl;
    std::cout << cipher->decrypt() << std::endl;

    return 0;
}

