<?php

require_once "./crypt/HashAlgorythm.php";

class SecurityHandler extends HashAlgorythm {

    /** @var array $sec_data */
    public array $sec_data;

    public function serialize_data(int $sec) : void {
        $this->sec_data = [
            "_" => $sec * 5,
            "f_break" => $this->gen_random_string($sec),
            "s_break" => $this->gen_random_string($sec)
        ];
    }

    /**
     * @param int $sec_lvl
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
}