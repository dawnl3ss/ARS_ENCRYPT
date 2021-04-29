<?php

require_once "ARS_SHELL_CRYPT.php";

class Encryption extends ARS_SHELL_CRYPT {

    /** @var string $string */
    private string $string;

    /** @var int $spacing */
    private int $spacing;

    /** @var string[] $crypt_data */
    private array $crypt_data = [
        "encrypted" => "",
        "decrypted" => ""
    ];

    public function __construct(string $string, int $spacing, array $c_data = []){
        $this->string = $string;
        $this->spacing = $spacing;
        if (!empty($c_data)) $this->crypt_data = $c_data;
    }

    /**
     * @return string
     */
    public function str_encrypt() : string {
        $encrypt = "";

        for ($i = 0; $i < strlen($this->string); $i++){
            $encrypt .= $this->char_to_achar($this->string[$i], self::METHOD_CRYPT, $this->spacing);
        }
        return $this->crypt_data["encrypted"] = $encrypt . "/-(_@25az" . strrev($encrypt) . "(_*%-$*=";
    }

    /**
     * @return string
     */
    public function str_decrypt() : string {
        $hash = explode("/-(_@25az", $this->crypt_data["encrypted"])[0];
        $decrypt = "";

        for ($i = 0; $i < strlen($hash); $i++){
            $decrypt .= $this->char_to_achar($hash[$i], self::METHOD_DECRYPT, $this->spacing);
        }
        return $this->crypt_data["decrypted"] = $decrypt;
    }
}