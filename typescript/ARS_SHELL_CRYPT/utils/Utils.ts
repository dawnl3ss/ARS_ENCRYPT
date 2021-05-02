/**
 * Get random number between the min value and the max value
 * @param min
 * @param max
 */
export function mt_rand(min: number, max: number) : number;
export function mt_rand() : number;

export function mt_rand(min?: number, max?: number): number {
    if (typeof min === 'undefined' || typeof max === 'undefined') {
        min = 0;
        max = 2147483647;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * String reverse
 * @param str
 */
export function reverse(str: string) : string {
    return str.split("").reverse().join("");
}
