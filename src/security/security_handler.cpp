#include "security_handler.h"
#include <random>
#include <ctime>
#include <math.h>

void security_handler::serialize_data(int sec, int plaintext_lght){
    this->_s = sec * 5;
    this->add = this->gen_add_string(sec, plaintext_lght);
    this->f_break = this->gen_random_string(sec, sec * 2);
    this->s_break = this->gen_random_string(sec, sec * 3);
}

std::string security_handler::gen_random_string(int sec, int multiplier){
    std::string str = ".";

    for (int i = 0; i < sec * 10; i++){
        srand((unsigned) time(0) * i * multiplier);
        str += this->list.CHAR_LIST[rand() % (this->list.get_size() - 1)];
    }
    return str;
}

std::string security_handler::gen_add_string(int sec, int plaintext_lght){
    std::string str = ".";

    for (int i = 0; i < (sec * 10) - plaintext_lght; i++) {
        srand((unsigned) time(0) * i);
        str += this->list.CHAR_LIST[rand() % (this->list.get_size() - 1)];
    }
    return str;
}
