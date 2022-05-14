#include "ars.h"
#include "src/crypt/cipher_crypt.cpp"

std::string encrypt(std::string plaintext, int sec){
    return (new cipher_crypt(plaintext, sec, "", ""))->encrypt();
}

std::string decrypt(std::string hash, int sec){
    return (new cipher_crypt("", sec, hash, ""))->decrypt();
}