# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is my own cryptage system, developped on all languages that I know.  
🔐 ARS_SHELL_CRYPT contains 4 level of security and decrypted system.  


[@Neptune](https://github.com/Neptune-Dev) : PHP, Python, TypeScript, Golang, C <br>
[@Galzronn](https://github.com/Galzronn) : TypeScript, Julia, C++, Golang, C <br>
[@MaXoooZ](https://github.com/max-xoo) : JavaScript  
  
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

encrypt = Encryption("string_to_crypt", Encryption.STANDARD_SPACING_SEC_1)
print(encrypt.str_encrypt())
print(encrypt.str_decrypt())
```
  
### 📌 TypeScript :
```typescript
import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

let encrypt = new Encryption("azerty", StandardSecurity.STANDARD_SEC_4);

console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());
```
