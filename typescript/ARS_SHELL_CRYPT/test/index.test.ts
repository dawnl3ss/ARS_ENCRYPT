import {Encryption} from "../src/cryptage/Encryption";
import {StandardSecurity} from "../src/standard/StandardSecurity";

describe("Encryption", () => {
	// eslint-disable-next-line max-len
	const baseString = ["test", "encryption", "decryption", "bell", "sound", "business", "camp", "young", "leader", "please", "valid", "judge", "cheek", "ambiguous", "vein", "uniform", "galaxy", "seal", "sustain", "terrify", "corruption", "pudding", "dentist"
	];

	type Standards = StandardSecurity extends string ? keyof typeof StandardSecurity : string;
	const standards: Record<Standards, StandardSecurity> = {
		STANDARD_SEC_1: StandardSecurity.STANDARD_SEC_1,
		STANDARD_SEC_2: StandardSecurity.STANDARD_SEC_2,
		STANDARD_SEC_3: StandardSecurity.STANDARD_SEC_3,
		STANDARD_SEC_4: StandardSecurity.STANDARD_SEC_4,
	};
	Object.keys(standards).forEach((standard: Standards) => {
		describe(`With ${standard}`, () => {
			it("should test if encrypted to decrypted string is equal to the base string", () => {
				baseString.forEach((word) => {
					const inst = new Encryption(word, standards[standard]);
					inst.strEncrypt();
					expect(inst.strDecrypt()).toStrictEqual(word);
				});
			});
		});
	});
});