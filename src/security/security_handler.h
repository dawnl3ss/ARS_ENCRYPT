#ifndef ARS_SHELL_CRYPT_SECURITY_HANDLER_H
#define ARS_SHELL_CRYPT_SECURITY_HANDLER_H

#include "../crypt/hash_algorithm.cpp"

class security_handler : public hash_algorithm {

public:
    std::string
        add = "",
        f_break = "",
        s_break = "";
    int _s = 0;

public:
    void serialize_data(int sec, int plaintext_lght);
    std::string gen_random_string(int sec, int multiplier);
    std::string gen_add_string(int sec, int plaintext_lght);
};

#endif

