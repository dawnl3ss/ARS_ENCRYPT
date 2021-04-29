<?php

require_once "cryptage/Encryption.php";

$encrypt_sec_1 = new Encryption("string_to_encrypt", Encryption::STANDARD_SPACING_SEC_1);
echo $encrypt_sec_1->str_encrypt() . "<br>";
echo $encrypt_sec_1->str_decrypt();
