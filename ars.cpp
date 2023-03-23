#include "ars.h"
#include "src/encrypt/cipher_encrypt.cpp"

std::string encrypt(std::string plaintext, int sec){
    return (new cipher_encrypt(plaintext, sec, "", ""))->encrypt();
}

std::string decrypt(std::string hash, int sec){
    return (new cipher_encrypt("", sec, hash, ""))->decrypt();
}