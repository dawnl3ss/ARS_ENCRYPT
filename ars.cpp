#include <iostream>
#include "src/crypt/CipherCrypt.cpp"

int main() {
    CipherCrypt *cipher = new CipherCrypt("test", 4);

    std::cout << cipher->encrypt() << std::endl;
    std::cout << cipher->decrypt() << std::endl;
    return 0;
}

