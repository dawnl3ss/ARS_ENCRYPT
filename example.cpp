#include <iostream>
#include "ars.cpp"

int main(){
    // Test encrypt :
    std::string encrypt_text = encrypt("test", 2);
    std::cout << encrypt_text << std::endl;

    // Test decrypt :
    std::string decrypt_text = decrypt(encrypt_text, 2);
    std::cout << decrypt_text << std::endl;
    return 0;
}