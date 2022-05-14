#ifndef ARS_SHELL_CRYPT_ARS_H
#define ARS_SHELL_CRYPT_ARS_H

#include "src/standard/standard_security.cpp"

struct standard_security security;

std::string encrypt(std::string plaintext, int sec);
std::string decrypt(std::string hash, int sec);

#endif
