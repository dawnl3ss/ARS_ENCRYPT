import SecurityLevel from "../security/SecurityLevel";
import ARS_SHELL_CRYPT from "./ARS_SHELL_CRYPT";
import { Utils } from "../utils/Utils";

export class Encryption extends SecurityLevel {

    private readonly str: string;
    private sec_lvl: number;

    protected decrypted: string = "";
    protected encrypted: string = "";

    /**
     * Encryption.ts constructor
     * @param str
     * @param sec_lvl
     */
    constructor(str: string, sec_lvl: number) {
        super();

        this.str = str;
        this.sec_lvl = sec_lvl;
        this.serialize_sec_data(sec_lvl);
    }

    /**
     * String Encryption
     */
    public str_encrypt() : string {
        let sec = this.sec_data;
        let encrypt = "";

        for (let i = 0; i < this.str.length; i++) {
            encrypt += this.char_to_achar(this.str[i], ARS_SHELL_CRYPT.METHOD_CRYPT, sec.spacing);
        }
        this.encrypted = encrypt + sec.firstStrBreak + Utils.reverse(encrypt) + sec.secondStrBreak;

        return this.encrypted;
    }

    /**
     * String decryption
     */
    public str_decrypt() : string {
        let sec = this.sec_data;
        let hash = this.encrypted.split("`")[0]; //explode the array
        let decrypt = "";

        for(let i = 0; i < hash.length; i++) {
            decrypt += this.char_to_achar(hash[i], ARS_SHELL_CRYPT.METHOD_DECRYPT, sec.spacing); //decrypt the string
        }

        return this.decrypted = decrypt;
    }
}
