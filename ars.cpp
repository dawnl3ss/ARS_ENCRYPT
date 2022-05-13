#include <iostream>
#include "crypt/CipherCrypt.cpp"

int main() {
    CipherCrypt *cipher = new CipherCrypt("test", 2, "azeaezae", "test");
    struct StandardList list;

    std::cout << cipher->encrypt() << std::endl;

    return 0;
}

