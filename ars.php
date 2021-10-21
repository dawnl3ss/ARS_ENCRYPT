<?php

require_once "crypt/CipherCrypt.php";

$encrypt = new CipherCrypt("azerty123", CipherCrypt::STANDARD_SEC_4);
echo $encrypt->encrypt() . "\n";
echo $encrypt->decrypt();