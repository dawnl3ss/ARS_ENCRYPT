import { Encryption } from "./cryptage/Encryption";
import { StandardSecurity } from "./standard/StandardSecurity";

const encrypt = new Encryption("azerty123", StandardSecurity.STANDARD_SEC_1);

console.log(encrypt.strEncrypt());
console.log(encrypt.());