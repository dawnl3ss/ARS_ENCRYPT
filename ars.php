<?php

require_once "crypt/CipherCrypt.php";

const STANDARD_SEC_1 = CipherCrypt::STANDARD_SEC_1;
const STANDARD_SEC_2 = CipherCrypt::STANDARD_SEC_2;
const STANDARD_SEC_3 = CipherCrypt::STANDARD_SEC_3;
const STANDARD_SEC_4 = CipherCrypt::STANDARD_SEC_4;

/**
 * @param string $plaintext
 *
 * @param int $sec
 *
 * @return string
 */
function encrypt(string $plaintext, int $sec) : string {
    return (new CipherCrypt($plaintext, $sec))->encrypt();
}

/**
 * @param string $hash
 *
 * @param int $sec
 *
 * @return string
 */
function decrypt(string $hash, int $sec) : string {
    return (new CipherCrypt("", $sec, ["encrypted" => $hash, "decrypted" => ""]))->decrypt();
}