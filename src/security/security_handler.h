#ifndef ARS_ENCRYPT_SECURITY_HANDLER_H
#define ARS_ENCRYPT_SECURITY_HANDLER_H

#include "../encrypt/hash_algorithm.cpp"

class security_handler : public hash_algorithm {

public:
    std::string
        add = "",
        f_break = "",
        s_break = "";
    int _s = 0;

public:
    void serialize_data(int sec, int plaintext_lght);
    std::string gen_random_string(int plaintext_lght, int multiplier);
};

#endif

