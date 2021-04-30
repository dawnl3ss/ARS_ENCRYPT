import SecurityLevel from "../security/SecurityLevel";
import ArsShellCrypt from "./arsShellData";
import { Utils } from "../utils/Utils";

export class Encryption extends SecurityLevel {
	private readonly str: string;
	protected decrypted = "";
	protected encrypted = "";

	/**
     * Encryption.ts constructor
     * @param str
     * @param secLvl
     */
	constructor(str: string, secLvl: number) {
		super();
		this.str = str;
		this.serializeSecData(secLvl);
	}

	/**
     * String Encryption
     */
	public strEncrypt() : string {
		let encrypt = "";
		for (let i = 0; i < this.str.length; i++) {
			encrypt += this.charToAchar(this.str[i], ArsShellCrypt.METHOD_CRYPT, this.secData.spacing);
		}
		this.encrypted = encrypt + this.secData.firstStrBreak + Utils.reverse(encrypt) + this.secData.secondStrBreak;
		return this.encrypted;
	}

	/**
     * String decryption
     */
	public strDecrypt(): string {
		const hash = this.encrypted.split("`")[0]; //explode the array
		let decrypt = "";
		for(let i = 0; i < hash.length; i++) {
			decrypt += this.charToAchar(hash[i], ArsShellCrypt.METHOD_DECRYPT, this.secData.spacing); //decrypt the string
		}
		this.decrypted = decrypt
		return decrypt;
	}
}
