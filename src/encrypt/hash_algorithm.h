#ifndef ARS_ENCRYPT_HASH_ALGORITHM_H
#define ARS_ENCRYPT_HASH_ALGORITHM_H

#include <cstring>

class hash_algorithm {

protected:
    int
        ascii_delimiter_start = 33,
        ascii_delimiter_end = 125;

public:
    char hash_char(char f_char, int _s);
    char unhash_char(char r_char, int _s);
};

#endif

