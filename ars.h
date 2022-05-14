#ifndef ARS_SHELL_CRYPT_ARS_H
#define ARS_SHELL_CRYPT_ARS_H

std::string encrypt(std::string plaintext, int sec);
std::string decrypt(std::string hash, int sec);

#endif
