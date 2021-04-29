<?php

include("./standard/StandardList.php");
include("./standard/StandardSpacing.php");

class ARS_SHELL_CRYPT implements StandardList, StandardSpacing {

    public const METHOD_CRYPT = 0;
    public const METHOD_DECRYPT = 1;

    /**
     * @param string $f_char
     *
     * @return mixed|string
     */
    public function char_to_achar(string $f_char, int $method, int $_spacing){
        $n_char = "";

        if ($method === self::METHOD_CRYPT) {
            for ($i = 0; $i <= count(self::CHAR_LIST) - 1; $i++) {
                if (self::CHAR_LIST[$i] === $f_char) {
                    if ($i >= $_spacing) {
                        $find = false;
                        do {
                            if (isset(self::CHAR_LIST[$i + $_spacing])) {
                                $n_char = self::CHAR_LIST[$i + $_spacing];
                                break;
                            } elseif (isset(self::CHAR_LIST[($i + $_spacing) - count(self::CHAR_LIST)])) {
                                $n_char = self::CHAR_LIST[($i + $_spacing) - count(self::CHAR_LIST)];
                                break;
                            }
                        } while (!$find);
                        break;
                    } elseif ($i < $_spacing) {
                        $find = false;
                        do {
                            if (isset(self::CHAR_LIST[$i + $_spacing])) {
                                $n_char = self::CHAR_LIST[$i + $_spacing];
                                break;
                            }
                        } while (!$find);
                        break;
                    }
                }
            }
        } elseif ($method === self::METHOD_DECRYPT){
            for ($i = 0; $i <= (int)count(self::CHAR_LIST) - 1; $i++) {
                if (self::CHAR_LIST[$i] === $f_char) {
                    if ($i >= $_spacing) {
                        $find = false;
                        do {
                            if (isset(self::CHAR_LIST[$i - $_spacing])) {
                                $n_char = self::CHAR_LIST[$i - $_spacing];
                                break;
                            }
                        } while (!$find);
                        break;
                    } elseif ($i < $_spacing) {
                        $find = false;
                        do {
                            if (isset(self::CHAR_LIST[$i - $_spacing])) {
                                $n_char = self::CHAR_LIST[$i - $_spacing];
                                break;
                            } elseif (isset(self::CHAR_LIST[($i - $_spacing) + count(self::CHAR_LIST)])) {
                                $n_char = self::CHAR_LIST[($i - $_spacing) + count(self::CHAR_LIST)];
                                break;
                            }
                        } while (!$find);
                        break;
                    }
                }
            }
        }
        return $n_char;
    }

    public function count(){
        return count(self::CHAR_LIST);
    }
}