<?php

require_once "./security/SecurityHandler.php";

class CipherCrypt extends SecurityHandler {

    /** @var string $plaintext */
    private string $plaintext;

    /** @var int $sec */
    private int $sec;

    /** @var array $crypt_data */
    private array $crypt_data;

    public function __construct(string $plaintext, int $sec, $crypt_data = ["encrypted" => "", "decrypted" => ""]){
        $this->plaintext = $plaintext;
        $this->sec = $sec;
        $this->crypt_data = $crypt_data;
        $this->serialize_data($sec);
    }

    /**
     * @return string
     */
    public function encrypt() : string {
        $sec = $this->sec_data;
        $encrypt = "";

        for ($i = 0; $i < strlen($this->plaintext); $i++){
            $encrypt .= $this->hash_char($this->plaintext[$i], $sec["_"]);
        }
        return $this->crypt_data["encrypted"] = $encrypt . $sec["f_break"] . $sec["s_break"];
    }

    /**
     * @return string
     */
    public function decrypt() : string {
        $sec = $this->sec_data;
        $hash = explode(".", $this->crypt_data["encrypted"])[0];
        $decrypt = "";

        for ($i = 0; $i < strlen($hash); $i++){
            $decrypt .= $this->unhash_char($hash[$i], $sec["_"]);
        }
        return $this->crypt_data["decrypted"] = $decrypt;
    }
}