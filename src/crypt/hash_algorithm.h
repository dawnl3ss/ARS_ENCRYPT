#ifndef ARS_SHELL_CRYPT_HASH_ALGORITHM_H
#define ARS_SHELL_CRYPT_HASH_ALGORITHM_H

#include "../standard/standard_list.cpp"

class hash_algorithm {

protected:
    struct standard_list list;

public:
    std::string hash_char(std::string f_char, int _s);
    std::string unhash_char(std::string r_char, int _s);
};

#endif

