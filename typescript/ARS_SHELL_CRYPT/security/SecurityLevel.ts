import ARS_SHELL_CRYPT from "../cryptage/ARS_SHELL_CRYPT";
import StandardList from "../standard/StandardList";
import { Utils } from "../utils/Utils";

export default class SecurityLevel extends ARS_SHELL_CRYPT implements StandardList {

    public spacing: number;
    public firstStrBreak: string;
    public secondStrBreak: string;

    /**
     * Generate a string follow the Encryption level
     * @param sec_lvl
     */
    public gen_sec_str(sec_lvl: number): string {
        let sec_str = "`";

        for (let i = 0; i < sec_lvl * 10; i++) {
            sec_str += StandardList.CHAR_LIST[Utils.mt_rand(0, this.count() - 1)];
        }
        return sec_str;
    }

    /**
     * Serialize the data
     * @param sec_lvl
     */
    public serialize_sec_data(sec_lvl: number) {
        this.spacing = sec_lvl * 10;
        this.firstStrBreak = this.gen_sec_str(sec_lvl);
        this.secondStrBreak = this.gen_sec_str(sec_lvl);
    }
}
