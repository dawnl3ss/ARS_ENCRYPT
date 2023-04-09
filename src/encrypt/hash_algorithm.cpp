#include "hash_algorithm.h"

char hash_algorithm::hash_char(char f_char, int _s){
    int char_ascii = int(f_char);
    int mod = this->ascii_delimiter_end - this->ascii_delimiter_start;
    return char(this->ascii_delimiter_start + (((char_ascii + _s) - this->ascii_delimiter_start) % mod));
}

char hash_algorithm::unhash_char(char r_char, int _s){
    int char_ascii = int(r_char);
    int mod = this->ascii_delimiter_end - this->ascii_delimiter_start;
    int new_ascii = (char_ascii - _s) - this->ascii_delimiter_start;
    return char(this->ascii_delimiter_start + (((new_ascii % mod) + mod) % mod));
}
