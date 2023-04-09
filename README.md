# ARS_ENCRYPT

⚒ ARS_ENCRYPT is a modified caesar's-cipher-based encrypt system written in C++.  
🔐 ARS_ENCRYPT contains 6 layers of security and a decrypt system.  

### 📌 Usage : (<a href="https://github.com/4m4Sec/ARS_ENCRYPT/blob/main/example.cpp">example.cpp</a>)
```cpp
#include <iostream>
#include "ars.cpp"

int main(){
    // Test encrypt :
    std::string encrypt_text = encrypt("azerty1234", security.STANDARD_SEC_1);
    std::cout << encrypt_text << std::endl;

    // Test decrypt :
    std::string decrypt_text = decrypt(encrypt_text, security.STANDARD_SEC_1);
    std::cout << decrypt_text << std::endl;
    return 0;
}
```
Require the <a href="https://github.com/4m4Sec/ARS_ENCRYPT/blob/main/ars.cpp">ars.cpp</a> file and use the functions encrypt() & decrypt()  
Security layer goes from 1 to 6. Check in the <a href="https://github.com/4m4Sec/ARS_ENCRYPT/blob/main/src/standard/standard_security.cpp">standard_security.cpp</a> file.