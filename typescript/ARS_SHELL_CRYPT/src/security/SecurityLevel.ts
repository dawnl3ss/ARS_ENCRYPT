import ARS_SHELL_CRYPT from "../cryptage/arsShellData";
import { Utils } from "../utils/Utils";
import { CHAR_LIST } from "../standard/StandardList";

interface ISecData {
	spacing: number;
	firstStrBreak: string;
	secondStrBreak: string;
}

export default class SecurityLevel extends ARS_SHELL_CRYPT {
	public secData!: ISecData;

	/**
     * Generate a string follow the Encryption level
     * @param secLvl
     */
	public genSecStr(secLvl: number): string {
		let secStr = "`";
		for (let i = 0; i < secLvl * 10; i++) {
			secStr += CHAR_LIST[Utils.mtRand(0, this.count() - 1)];
		}
		return secStr;
	}

	/**
     * Serialize the data
     * @param secLvl
     */
	public serializeSecData(secLvl: number): ISecData {
		this.secData = {
			spacing: secLvl * 10,
			firstStrBreak: this.genSecStr(secLvl),
			secondStrBreak: this.genSecStr(secLvl),
		};
		return this.secData
	}
}
