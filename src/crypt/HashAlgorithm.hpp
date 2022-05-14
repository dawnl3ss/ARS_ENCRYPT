#ifndef ARS_SHELL_CRYPT_HASHALGORITHM_H
#define ARS_SHELL_CRYPT_HASHALGORITHM_H

#include "../standard/StandardList.cpp"

class HashAlgorithm {

protected:
    struct StandardList list;

public:
    std::string hash_char(std::string f_char, int _s);
    std::string unhash_char(std::string r_char, int _s);
};

#endif

