var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) ||
            function(d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Encryption = void 0;

var SecurityLevel_1 = require("../security/SecurityLevel");
var ARS_SHELL_CRYPT_1 = require("./ARS_SHELL_CRYPT");
var Utils_1 = require("../utils/Utils");

var Encryption = /** @class */ (function(_super) {
    __extends(Encryption, _super);

    /**
     * Encryption.ts constructor
     * @param str
     * @param sec_lvl
     */
    function Encryption(str, sec_lvl) {
        var _this = _super.call(this) || this;
        _this.decrypted = "";
        _this.encrypted = "";
        _this.str = str;
        _this.sec_lvl = sec_lvl;
        _this.serialize_sec_data(sec_lvl);
        return _this;
    }

    /**
     * String Encryption
     */
    Encryption.prototype.str_encrypt = function() {
        var encrypt = "";
        for (var i = 0; i < this.str.length; i++) {
            encrypt += this.char_to_achar(this.str[i], ARS_SHELL_CRYPT_1.default.METHOD_CRYPT, this.spacing);
        }
        this.encrypted = encrypt + this.firstStrBreak + Utils_1.Utils.reverse(encrypt) + this.secondStrBreak;
        return this.encrypted;
    };

    /**
     * String decryption
     */
    Encryption.prototype.str_decrypt = function() {
        var hash = this.encrypted.split("`")[0]; //explode the array
        var decrypt = "";
        for (var i = 0; i < hash.length; i++) {
            decrypt += this.char_to_achar(hash[i], ARS_SHELL_CRYPT_1.default.METHOD_DECRYPT, this.spacing); //decrypt the string
        }
        return this.decrypted = decrypt;
    };
    return Encryption;
}(SecurityLevel_1.default));

exports.Encryption = Encryption;