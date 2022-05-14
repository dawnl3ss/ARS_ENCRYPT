#include "cipher_crypt.h"

cipher_crypt::cipher_crypt(std::string plaintext, int sec, std::string encrypted, std::string decrypted):
    plaintext(plaintext),
    sec(sec),
    encrypted(encrypted),
    decrypted(decrypted)
{ this->serialize_data(sec, plaintext.length()); }

std::string cipher_crypt::encrypt(){
    std::string encrypt_s = "";

    for (int i = 0; i < this->plaintext.length(); i++){
        encrypt_s += this->hash_char(std::string(1, this->plaintext.at(i)), this->_s);
    }
    this->encrypted = encrypt_s + this->add + this->f_break + this->s_break;
    return this->encrypted;
}

std::string cipher_crypt::decrypt(){
    std::string decrypt_s = "";
    std::vector<std::string> part = explode(this->encrypted, '.');
    std::string hash = part.at(0);

    for (int i = 0; i < hash.size(); i++){
        decrypt_s += this->unhash_char(std::string(1, hash.at(i)), this->_s);
    }
    this->decrypted = decrypt_s;
    return this->decrypted;
}

