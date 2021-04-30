import { CHAR_LIST } from "../standard/StandardList";

export default class ArsShellCrypt {

	public static readonly METHOD_CRYPT = 0;
	public static readonly METHOD_DECRYPT = 1;

	public count(): number {
		return Object.keys(CHAR_LIST).length;
	}

	/**
     * @param fChar
     * @param method
     * @param _spacing
     */
	public charToAchar(fChar: string, method: number, _spacing: number): string {
		let nChar = "";

		if(method === ArsShellCrypt.METHOD_CRYPT) {
			for(let i = 0; i < this.count(); i++) {
				if(CHAR_LIST[i] === fChar) {
					if(i >= _spacing) {
						const find = false;
						do {
							if(i + _spacing in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[i + _spacing];
								break;
							} else if((i + _spacing) - this.count() in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[(i + _spacing) - this.count()];
								break;
							}
						} while(!find);
						break;
					} else if(i < _spacing) {
						const find = false;
						do {
							if(i + _spacing in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[i + _spacing];
								break;
							}
						} while(!find)
						break;
					}
				}
			}
		} else if(method === ArsShellCrypt.METHOD_DECRYPT) {
			for(let i = 0; i < this.count(); i++) {
				if(CHAR_LIST[i] === fChar) {
					if(i >= _spacing) {
						const find = false;
						do {
							if(i - _spacing in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[i - _spacing];
								break;
							}
						} while(!find);
						break;

					} else if(i < _spacing) {
						const find = false;
						do {
							if(i - _spacing in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[i - _spacing];
								break;
							} else if((i - _spacing) + this.count() in Object.keys(CHAR_LIST)) {
								nChar = CHAR_LIST[i - _spacing + this.count()];
								break;
							}
						} while(!find)
						break;
					}
				}
			}
		}
		return nChar;
	}
}
