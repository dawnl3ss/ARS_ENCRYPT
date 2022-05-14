# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is a modified caesar's-cipher-based encrypt system written in C++.  
🔐 ARS_SHELL_CRYPT contains 7 levels of security and even a decrypt system.  

### 📌 Usage : (<a href="https://github.com/Neptune-IT/ARS_SHELL_CRYPT/blob/main/example.cpp">example.cpp</a>)
```cpp
#include <iostream>
#include "ars.cpp"

int main(){
    // Test encrypt :
    std::string encrypt_text = encrypt("test", 2);
    std::cout << encrypt_text << std::endl;

    // Test decrypt :
    std::string decrypt_text = decrypt(encrypt_text, 2);
    std::cout << decrypt_text << std::endl;
    return 0;
}
```
Require the <a href="https://github.com/Neptune-IT/ARS_SHELL_CRYPT/blob/main/ars.cpp">ars.cpp</a> file and use the functions encrypt() & decrypt()  
All security constants : (check in <a href="https://github.com/Neptune-IT/ARS_SHELL_CRYPT/blob/main/src/standard/standard_security.cpp">standard_security.cpp</a>)  
-> <span style="color:grey">STANDARD_SEC_1</span>, STANDARD_SEC_2, <span style="color:grey">STANDARD_SEC_3</span>, STANDARD_SEC_4  
-> <span style="color:grey">STANDARD_SEC_5</span>, STANDARD_SEC_6, <span style="color:grey">STANDARD_SEC_7</span>