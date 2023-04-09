#ifndef ARS_ENCRYPT_CIPHER_ENCRYPT_H
#define ARS_ENCRYPT_CIPHER_ENCRYPT_H

#include "../security/security_handler.cpp"
#include "../../utils/utils.cpp"

class cipher_encrypt : public security_handler {

private:
    std::string
        plaintext = "",
        encrypted = "",
        decrypted = "";
    int sec = 0;

public:
    cipher_encrypt(std::string plaintext, int sec, std::string encrypted, std::string decrypted);
    std::string encrypt();
    std::string decrypt();
};

#endif