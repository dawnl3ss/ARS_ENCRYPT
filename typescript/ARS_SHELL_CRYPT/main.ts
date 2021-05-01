import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

const encrypt = new Encryption("azerty", StandardSecurity.STANDARD_SEC_1);

console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());
