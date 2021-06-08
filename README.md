# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is my own cryptage system, developped on all languages that I know.  
🔐 ARS_SHELL_CRYPT contains 4 level of security and decrypted system.  

🪐 Web API is now available !


[@Neptune](https://github.com/Neptune-Dev) : PHP, Python, TypeScript, Golang, C, Bash  
[@Mitsuaaki](https://github.com/Mitsuaaki) : TypeScript, Julia, C++, Golang, C, Bash  
  
### 📌 PHP :
```php
<?php

require_once "cryptage/Encryption.php";

$encrypt = new Encryption("string_to_encrypt", Encryption::STANDARD_SEC_1);
echo $encrypt->str_encrypt() . "<br>";
echo $encrypt->str_decrypt();

?>
```
  
### 📌 Python :  
```python
from cryptage.Encryption import Encryption

encrypt = Encryption("string_to_crypt", Encryption.STANDARD_SEC_1)
print(encrypt.str_encrypt())
print(encrypt.str_decrypt())
```
  
### 📌 TypeScript :
```typescript
import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

let encrypt = new Encryption("string_to_encrypt", StandardSecurity.STANDARD_SEC_1);

console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());
```
