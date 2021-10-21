# ARS_SHELL_CRYPT

⚒ ARS_SHELL_CRYPT is my own cryptage algorythme, based on Caesar's cipher.  
🔐 ARS_SHELL_CRYPT contains 4 levels of security and decrypt system.

### 📌 Usage :
```php
<?php

require_once "ars.php";

$encrypt = encrypt("your text", STANDARD_SEC_1);
$decrypt = decrypt($encrypt, STANDARD_SEC_1);

?>
```  
Require the main file and use the functions encrypt() & decrypt()  
All security constants :  
-> STANDARD_SEC_1, STANDARD_SEC_2, STANDARD_SEC_3, STANDARD_SEC_4