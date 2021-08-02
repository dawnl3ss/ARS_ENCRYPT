<?php

require_once "./cryptage/ARS_SHELL_CRYPT.php";

class SecurityLevel extends ARS_SHELL_CRYPT {

    /** @var array $sec_data */
    public $sec_data = [];

    /**
     * @param int $sec_lvl
     *
     * @return array
     */
    public function serialize_sec_data(int $sec_lvl) : array {
        return $this->sec_data = [
            "spacing" => $sec_lvl * 5,
            "first_str_break" => $this->gen_sec_str($sec_lvl),
            "second_str_break" => $this->gen_sec_str($sec_lvl)
        ];
    }

    /**
     * @param int $sec_lvl
     *
     * @return string
     */
    public function gen_sec_str(int $sec_lvl) : string {
        $sec_str = "`";

        for ($i = 0; $i < $sec_lvl * 10; $i++){
            $sec_str .= self::CHAR_LIST[mt_rand(0, $this->count() - 1)];
        }
        return $sec_str;
    }
}