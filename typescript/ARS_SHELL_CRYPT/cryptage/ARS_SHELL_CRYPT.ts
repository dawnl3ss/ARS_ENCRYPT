import StandardList from "../standard/StandardList";

export default class ARS_SHELL_CRYPT implements StandardList {

    public static METHOD_CRYPT = 0;
    public static METHOD_DECRYPT = 1;

    public count() : number {
        return Object.keys(StandardList.CHAR_LIST).length;
    }

    /**
     * @param f_char
     * @param method
     * @param _spacing
     */
    public char_to_achar(f_char: string, method: number, _spacing: number) {
        let n_char: string;

        if(method === ARS_SHELL_CRYPT.METHOD_CRYPT) {
            for(let i = 0; i <= this.count() - 1; i++) {
                if(StandardList.CHAR_LIST[i] === f_char) {
                    if(i >= _spacing) {
                        let find = false;
                        do {
                            if(i + _spacing in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[i + _spacing];
                                break;
                            } else if((i + _spacing) - this.count() in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[(i + _spacing) - this.count()];
                                break;
                            }
                        } while(!find);
                        break;

                    } else if(i < _spacing) {
                        let find = false;
                        do {
                            if(i + _spacing in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[i + _spacing];
                                break;
                            }
                        } while(!find)
                        break;
                    }
                }
            }
        } else if(method === ARS_SHELL_CRYPT.METHOD_DECRYPT) {
            for(let i = 0; i <= this.count() - 1; i++) {
                if(StandardList.CHAR_LIST[i] === f_char) {
                    if(i >= _spacing) {
                        let find = false;
                        do {
                            if(i - _spacing in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[i - _spacing];
                                break;
                            }
                        } while(!find);
                        break;

                    } else if(i < _spacing) {
                        let find = false;
                        do {
                            if(i - _spacing in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[i - _spacing];
                                break;
                            } else if((i - _spacing) + this.count() in Object.keys(StandardList.CHAR_LIST)) {
                                n_char = StandardList.CHAR_LIST[i - _spacing + this.count()];
                                break;
                            }
                        } while(!find)
                        break;
                    }
                }
            }
        }

        return n_char;
    }
}
