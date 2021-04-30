Object.defineProperty(exports, "__esModule", { value: true });
var StandardList_1 = require("../standard/StandardList");

var ARS_SHELL_CRYPT = /** @class */ (function () {
    function ARS_SHELL_CRYPT() {
    }

    ARS_SHELL_CRYPT.prototype.count = function () {
        return Object.keys(StandardList_1.default.CHAR_LIST).length;
    };

    /**
     * @param f_char
     * @param method
     * @param _spacing
     */
    ARS_SHELL_CRYPT.prototype.char_to_achar = function (f_char, method, _spacing) {
        var n_char;
        if (method === ARS_SHELL_CRYPT.METHOD_CRYPT) {
            for (var i = 0; i <= this.count() - 1; i++) {
                if (StandardList_1.default.CHAR_LIST[i] === f_char) {
                    if (i >= _spacing) {
                        var find = false;
                        do {
                            if (i + _spacing in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[i + _spacing];
                                break;
                            }
                            else if ((i + _spacing) - this.count() in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[(i + _spacing) - this.count()];
                                break;
                            }
                        } while (!find);
                        break;
                    }
                    else if (i < _spacing) {
                        var find = false;
                        do {
                            if (i + _spacing in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[i + _spacing];
                                break;
                            }
                        } while (!find);
                        break;
                    }
                }
            }
        } else if (method === ARS_SHELL_CRYPT.METHOD_DECRYPT) {
            for (var i = 0; i <= this.count() - 1; i++) {
                if (StandardList_1.default.CHAR_LIST[i] === f_char) {
                    if (i >= _spacing) {
                        var find = false;
                        do {
                            if (i - _spacing in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[i - _spacing];
                                break;
                            }
                        } while (!find);
                        break;
                    }
                    else if (i < _spacing) {
                        var find = false;
                        do {
                            if (i - _spacing in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[i - _spacing];
                                break;
                            }
                            else if ((i - _spacing) + this.count() in Object.keys(StandardList_1.default.CHAR_LIST)) {
                                n_char = StandardList_1.default.CHAR_LIST[i - _spacing + this.count()];
                                break;
                            }
                        } while (!find);
                        break;
                    }
                }
            }
        }
        return n_char;
    };

    ARS_SHELL_CRYPT.METHOD_CRYPT = 0;
    ARS_SHELL_CRYPT.METHOD_DECRYPT = 1;

    return ARS_SHELL_CRYPT;
}());

exports.default = ARS_SHELL_CRYPT;