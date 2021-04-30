Object.defineProperty(exports, "__esModule", {
    value: true
});

var Encryption_1 = require("./cryptage/Encryption");
var StandardSecurity_1 = require("./standard/StandardSecurity");

var encrypt = new Encryption_1.Encryption("azerty", StandardSecurity_1.StandardSecurity.STANDARD_SEC_4);

console.log(encrypt.str_encrypt());
console.log(encrypt.str_decrypt());