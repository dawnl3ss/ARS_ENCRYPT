#include "HashAlgorithm.hpp"

std::string HashAlgorithm::hash_char(std::string f_char, int _s){
    std::string n_char = "";

    for (int i = 0; i <= this->list.get_size() - 1; i++){
        if (this->list.CHAR_LIST[i] == f_char){
            if (i >= _s){
                do {
                    if (this->list.CHAR_LIST.find(i + _s) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[i + _s];
                        break;
                    } else if (this->list.CHAR_LIST.find((i + _s) - this->list.get_size()) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[(i + _s) - this->list.get_size()];
                        break;
                    }
                } while (true);
                break;
            } else if (i < _s){
                do {
                    if (this->list.CHAR_LIST.find(i + _s) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[i + _s];
                        break;
                    }
                } while (true);
                break;
            }
        }
    }
    return n_char;
}

std::string HashAlgorithm::unhash_char(std::string r_char, int _s){
    std::string n_char = "";

    for (int i = 0; i <= this->list.get_size() - 1; i++){
        if (this->list.CHAR_LIST[i] == r_char){
            if (i >= _s){
                do {
                    if (this->list.CHAR_LIST.find(i - _s) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[i - _s];
                        break;
                    }
                } while (true);
                break;
            } else if (i < _s){
                do {
                    if (this->list.CHAR_LIST.find(i - _s) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[i - _s];
                        break;
                    } else if (this->list.CHAR_LIST.find((i - _s) + this->list.get_size()) != this->list.CHAR_LIST.end()){
                        n_char = this->list.CHAR_LIST[(i - _s) + this->list.get_size()];
                        break;
                    }
                } while (true);
                break;
            }
        }
    }
    return n_char;
}
