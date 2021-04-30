export class Utils {

	/**
     * Get random number between the min value and the max value
     * @param min
     * @param max
     */
	public static mtRand(min = 0, max = 2147483647): number {
		if(arguments.length === 1) {
			throw new Error("Warning: mtRand() expects exactly 2 parameters, 1 given")
		}
		min = parseInt(String(min), 10)
		max = parseInt(String(max), 10)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	/**
     * String reverse
     * @param str
     */
	static reverse(str: string): string {
		return [...str].reverse().join("");
	}
}
