<?php

require_once "./crypt/HashAlgorythm.php";

class SecurityHandler extends HashAlgorythm {

    /** @var array $sec_data */
    public array $sec_data;

    public function serialize_data(int $sec, int $plaintext_lght) : void {
        $this->sec_data = [
            "_" => $sec * 5,
            "add" => $this->gen_add_string($sec, $plaintext_lght),
            "f_break" => $this->gen_random_string($sec),
            "s_break" => $this->gen_random_string($sec)
        ];
    }

    /**
     * @param int $sec
     *
     * @return string
     */
    public function gen_random_string(int $sec) : string {
        $str = ".";

        for ($i = 0; $i < $sec * 10; $i++){
            $str .= self::CHAR_LIST[mt_rand(0, $this->count() - 1)];
        }
        return $str;
    }

    /**
     * @param int $sec
     *
     * @param int $plaintext_lght
     *
     * @return string
     */
    public function gen_add_string(int $sec, int $plaintext_lght) : string {
        $str = "`";

        for ($i = 0; $i < ($sec * 10) - $plaintext_lght; $i++){
            $str .= self::CHAR_LIST[mt_rand(0, $this->count() - 1)];
        }
        return $str;
    }
}