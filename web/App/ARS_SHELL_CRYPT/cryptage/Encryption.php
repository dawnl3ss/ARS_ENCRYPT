<?php

require_once "./security/SecurityLevel.php";

class Encryption extends SecurityLevel {

    /** @var string $string */
    private string $string;

    /** @var int $sec_lvl */
    private int $sec_lvl;

    /** @var string[] $crypt_data */
    private array $crypt_data = [
        "encrypted" => "",
        "decrypted" => ""
    ];

    public function __construct(string $string, int $sec_lvl, array $c_data = []){
        $this->string = $string;
        $this->sec_lvl = $sec_lvl;
        if (!empty($c_data)) $this->crypt_data = $c_data;
        $this->sec_data = $this->serialize_sec_data($sec_lvl);
    }

    /**
     * @return string
     */
    public function str_encrypt() : string {
        $sec = $this->sec_data;
        $encrypt = "";

        for ($i = 0; $i < strlen($this->string); $i++){
            $encrypt .= $this->char_to_achar($this->string[$i], self::METHOD_CRYPT, $sec["spacing"]);
        }
        return $this->crypt_data["encrypted"] = $encrypt . $sec["first_str_break"] . strrev($encrypt) . $sec["second_str_break"];
    }

    /**
     * @return string
     */
    public function str_decrypt() : string {
        $sec = $this->sec_data;
        $hash = explode("`", $this->crypt_data["encrypted"])[0];
        $decrypt = "";

        for ($i = 0; $i < strlen($hash); $i++){
            $decrypt .= $this->char_to_achar($hash[$i], self::METHOD_DECRYPT, $sec["spacing"]);
        }
        return $this->crypt_data["decrypted"] = $decrypt;
    }
}