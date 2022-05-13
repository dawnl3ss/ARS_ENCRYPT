#include "HashAlgorithm.cpp"

class CipherCrypt : public HashAlgorithm {

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
    }

    int get_sec(){
        return this->sec;
    }

    std::string encrypt(){
        return this->hash_char("9", 5);
    }

    std::string decrypt(){
        //TODO
        return "";
    }
};
