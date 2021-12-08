# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is my own cryptage system, developped on all languages that I know.  
🔐 ARS_SHELL_CRYPT contains 5 level of security and decrypted system (5th is indecryptable).  


[@Neptune](https://github.com/Neptune-Dev) : PHP, Python, TypeScript  
[@Galzronn](https://github.com/Galzronn) : TypeScript  
[@RestartFU](https://github.com/RestartFU) : Golang
  
### 📌 Web API :
```
Request for encryption :  
-> https://neptune-it.xyz/projects/website/ars-crypter/api/json/encrypt.php?string=test&security=1  
Request result form : {"string":"test","hash":"..."}  
  
Request for decryption :  
-> https://neptune-it.xyz/projects/website/ars-crypter/api/json/decrypt.php?hash=...&security=1  
Request result form : {"hash":"...","string":"test"}
```

### 📌 PHP :
```php
<?php

require_once "cryptage/Encryption.php";

$encrypt = new Encryption("test", Encryption::STANDARD_SEC_1);
echo $encrypt->str_encrypt();
echo $encrypt->str_decrypt();

?>
```
  
### 📌 Python :  
```python
from cryptage.Encryption import Encryption

encrypt = Encryption("test", Encryption.STANDARD_SEC_1)
print(encrypt.str_encrypt())
print(encrypt.str_decrypt())
```
  
### 📌 TypeScript :
```typescript
import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

let encrypt = new Encryption("test", StandardSecurity.STANDARD_SEC_1);
console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());
```
  
### 📌 Golang :
```golang
encrypt := cryptage.Encrypt("test", security.STANDARD_SEC_1)
decrypt := cryptage.Decrypt(encrypt, security.STANDARD_SEC_1)
fmt.Println(encrypt)
fmt.Println(decrypt)
```
