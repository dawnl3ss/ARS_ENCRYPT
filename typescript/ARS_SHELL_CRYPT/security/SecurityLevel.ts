import ARS_SHELL_CRYPT from "../cryptage/ARS_SHELL_CRYPT";
import { CHAR_LIST } from "../standard/StandardList";
import { mt_rand } from "../utils/Utils";

interface ISecData {
    spacing: number;
    firstStrBreak: string;
    secondStrBreak: string;
}

export default class SecurityLevel extends ARS_SHELL_CRYPT {

    public sec_data: ISecData;

    /**
     * Generate a string follow the Encryption level
     * @param sec_lvl
     */
    public gen_sec_str(sec_lvl: number): string {
        let sec_str = "`";

        for (let i = 0; i < sec_lvl * 10; i++) {
            sec_str += CHAR_LIST[mt_rand(0, this.count() - 1)];
        }
        return sec_str;
    }

    /**
     * Serialize the data
     * @param sec_lvl
     */
    public serialize_sec_data(sec_lvl: number) {
        return this.sec_data = {
            spacing: sec_lvl * 5,
            firstStrBreak: this.gen_sec_str(sec_lvl),
            secondStrBreak: this.gen_sec_str(sec_lvl),
        }
    }
}
