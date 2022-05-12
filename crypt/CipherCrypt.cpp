using namespace std;

class CipherCrypt {

private:
    string plaintext = "";
    int sec = 0;
    string encrypted = "";
    string decrypted = "";

public:
    CipherCrypt(string plaintext, int sec, string encrypted = "", string decrypted = ""){
        this->plaintext = plaintext;
        this->sec = sec;
        this->encrypted = encrypted;
        this->decrypted = decrypted;
    }

    int get_sec(){ return sec; }

    string encrypt(){
        //TODO
        return "";
    }

    string decrypt(){
        //TODO
        return "";
    }
};
