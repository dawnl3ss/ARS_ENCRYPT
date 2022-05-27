#include "security_handler.h"
#include <random>
#include <ctime>
#include <math.h>

void security_handler::serialize_data(int sec, int plaintext_lght){
    this->_s = sec * 5;
    this->add = this->gen_random_string(plaintext_lght, sec * (time(0) + 2));
    this->f_break = this->gen_random_string(plaintext_lght, sec * (time(0) - 2));
    this->s_break = this->gen_random_string(plaintext_lght, sec * (time(0) / 2));
}

std::string security_handler::gen_random_string(int plaintext_lght, int multiplier){
    std::string str = ".";

    for (int i = time(0); i < time(0) + plaintext_lght; i++){
        srand((unsigned) (time(0) * i * multiplier) + (multiplier * time(0)));
        str += this->list.CHAR_LIST[rand() % (this->list.get_size() - 1)];
    }
    return str;
}