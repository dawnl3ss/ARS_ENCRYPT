<?php

require_once "cryptage/Encryption.php";

$encrypt_sec_1 = new Encryption("sale merde", Encryption::STANDARD_SPACING_SEC_1);
echo $encrypt_sec_1->str_encrypt() . "<br>";
echo $encrypt_sec_1->str_decrypt();
