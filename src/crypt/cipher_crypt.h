#ifndef ARS_SHELL_CRYPT_CIPHER_CRYPT_H
#define ARS_SHELL_CRYPT_CIPHER_CRYPT_H

#include "../security/security_handler.cpp"
#include "../../utils/utils.cpp"

class cipher_crypt : public security_handler {

private:
    std::string
        plaintext = "",
        encrypted = "",
        decrypted = "";
    int sec = 0;

public:
    cipher_crypt(std::string plaintext, int sec, std::string encrypted, std::string decrypted);
    std::string encrypt();
    std::string decrypt();
};

#endif
