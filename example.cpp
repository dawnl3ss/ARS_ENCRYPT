#include <iostream>
#include "ars.cpp"

int main(){
    // Test encrypt :
    std::string encrypt_text = encrypt("azerty123", security.STANDARD_SEC_6);
    std::cout << encrypt_text << std::endl;

    // Test decrypt :
    std::string decrypt_text = decrypt(encrypt_text, security.STANDARD_SEC_6);
    std::cout << decrypt_text << std::endl;
    return 0;
}