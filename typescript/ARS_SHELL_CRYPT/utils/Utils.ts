export class Utils {

    /**
     * Get random number between the min value and the max value
     * @param min
     * @param max
     */
    static mt_rand(min: number, max: number) {
        let argc = arguments.length

        if(argc === 0) {
            min = 0
            max = 2147483647
        } else if(argc === 1) {
            throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given")
        } else {
            min = parseInt(String(min), 10)
            max = parseInt(String(max), 10)
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    /**
     * String reverse
     * @param str
     */
    static reverse = function(str: string) {
        return str.split('').reverse().join('');
    }
}
