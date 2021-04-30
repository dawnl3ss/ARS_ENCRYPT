import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

let encrypt = new Encryption("azerty", StandardSecurity.STANDARD_SEC_4);

console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());
