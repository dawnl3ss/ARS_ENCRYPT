<?php

require_once "cryptage/Encryption.php";

$encrypt = new Encryption("azerty123", Encryption::STANDARD_SEC_1);
echo $encrypt->str_encrypt() . "\n";
echo $encrypt->str_decrypt();
