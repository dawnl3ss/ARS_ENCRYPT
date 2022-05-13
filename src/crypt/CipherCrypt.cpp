#include "../security/SecurityHandler.cpp"
#include "../../utils/Utils.cpp"

class CipherCrypt : public SecurityHandler {

private:
    std::string
        plaintext = "",
        encrypted = "",
        decrypted = "";
    int sec = 0;

public:
    CipherCrypt(std::string plaintext, int sec, std::string encrypted = "", std::string decrypted = ""){
        this->plaintext = plaintext;
        this->sec = sec;
        this->encrypted = encrypted;
        this->decrypted = decrypted;
        this->serialize_data(sec, plaintext.length());
    }

    std::string encrypt(){
        std::string encrypt_s = "";

        for (int i = 0; i < this->plaintext.length(); i++){
            encrypt_s += this->hash_char(std::string(1, this->plaintext.at(i)), this->_s);
        }
        this->encrypted = encrypt_s + this->add + this->f_break + this->s_break;
        return this->encrypted;
    }

    std::string decrypt(){
        std::string decrypt_s = "";
        std::vector<std::string> part = explode(this->encrypted, '.');
        std::string hash = part.at(0);

        for (int i = 0; i < hash.size(); i++){
            decrypt_s += this->unhash_char(std::string(1, hash.at(i)), this->_s);
        }
        this->decrypted = decrypt_s;
        return this->decrypted;
    }
};
