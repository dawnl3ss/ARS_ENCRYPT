import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

const encrypt = new Encryption("azerty", StandardSecurity.STANDARD_SEC_1);

console.log(encrypt.str_encrypt()); //f9jwy7`(m.vnFCpx/7ywj9f`q=TfxR+M23
console.log(encrypt.str_decrypt()); //azerty
