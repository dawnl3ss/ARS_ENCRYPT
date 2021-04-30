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

var ARS_SHELL_CRYPT_1 = require("../cryptage/ARS_SHELL_CRYPT");
var StandardList_1 = require("../standard/StandardList");
var Utils_1 = require("../utils/Utils");

var SecurityLevel = /** @class */ (function(_super) {
    __extends(SecurityLevel, _super);

    function SecurityLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    /**
     * Generate a string follow the Encryption level
     * @param sec_lvl
     */
    SecurityLevel.prototype.gen_sec_str = function(sec_lvl) {
        var sec_str = "`";
        for (var i = 0; i < sec_lvl * 10; i++) {
            sec_str += StandardList_1.default.CHAR_LIST[Utils_1.Utils.mt_rand(0, this.count() - 1)];
        }
        return sec_str;
    };

    /**
     * Serialize the data
     * @param sec_lvl
     */
    SecurityLevel.prototype.serialize_sec_data = function(sec_lvl) {
        this.spacing = sec_lvl * 10;
        this.firstStrBreak = this.gen_sec_str(sec_lvl);
        this.secondStrBreak = this.gen_sec_str(sec_lvl);
    };
    return SecurityLevel;
}(ARS_SHELL_CRYPT_1.default));

exports.default = SecurityLevel;