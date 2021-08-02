# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is my own cryptage system, developped on all languages that I know.  
🔐 ARS_SHELL_CRYPT contains 5 level of security and decrypted system (5th is indecryptable).  


[@Neptune](https://github.com/Neptune-Dev) : PHP, Python, TypeScript  
[@Galzronn](https://github.com/Galzronn) : TypeScript
  
### 📌 Web API :
```
Request for encryption :  
-> http://188.165.33.34/api/json/encrypt.php?string=...&security=...  
Request result form : {"string":"...","hash":"..."}  
  
Request for decryption :  
-> http://188.165.33.34/api/json/decrypt.php?hash=...&security=...  
Request result form : {"hash":"...","string":"..."}
```

### 📌 PHP :
```php
<?php

require_once "cryptage/Encryption.php";

$encrypt = new Encryption("string_to_encrypt", Encryption::STANDARD_SEC_1);
echo $encrypt->str_encrypt();
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
