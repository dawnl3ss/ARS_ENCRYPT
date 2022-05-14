#ifndef ARS_SHELL_CRYPT_CIPHERCRYPT_H
#define ARS_SHELL_CRYPT_CIPHERCRYPT_H

#include "../security/SecurityHandler.cpp"
#include "../../utils/Utils.cpp"

class CipherCrypt : public SecurityHandler {

private:
    std::string
        plaintext = "",
        encrypted = "",
        decrypted = "";
    int sec = 0;

public:
    CipherCrypt(std::string plaintext, int sec, std::string encrypted, std::string decrypted);
    std::string encrypt();
    std::string decrypt();
};

#endif