#include <iostream>
#include "crypt/CipherCrypt.cpp"

int main() {
    CipherCrypt cipher {"test", 2, "azeaezae", "test"};
    
    std::cout << cipher.get_sec() << std::endl;
    
    return 0;
}

