#include "cipher_encrypt.h"

cipher_encrypt::cipher_encrypt(std::string plaintext, int sec, std::string encrypted, std::string decrypted):
    plaintext(plaintext),
    sec(sec),
    encrypted(encrypted),
    decrypted(decrypted)
{ this->serialize_data(sec, plaintext.length()); }

std::string cipher_encrypt::encrypt(){
    std::string encrypt_s = "";

    for (int i = 0; i < this->plaintext.length(); i++){
        encrypt_s.push_back(this->hash_char(this->plaintext.at(i), this->_s));
    }
    this->encrypted = encrypt_s + this->add + this->f_break + this->s_break;
    return this->encrypted;
}

std::string cipher_encrypt::decrypt(){
    std::string decrypt_s = "";
    std::vector<std::string> part = split(this->encrypted, '~');
    std::string hash = part.at(0);

    for (int i = 0; i < hash.size(); i++){
        decrypt_s.push_back(this->unhash_char(hash.at(i), this->_s));
    }
    this->decrypted = decrypt_s;
    return this->decrypted;
}

