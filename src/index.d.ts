declare namespace ylogJs {
    /**
     * array summation
     * @param arr number[]
     * @param i Summing from the i index (not required)
     * @return number
     */
    export function sumArr(arr: Array<number>, i: number): number

    /**
     * Parse the time to string
     * @param timestamp
     * @param cFormat
     * @returns string
     */
    export function parseTime(timestamp: number | string | Date, cFormat: string): string
}

declare module 'ylog-js' {
    export = ylogJs
}