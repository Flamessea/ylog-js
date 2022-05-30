export function sumArr(arr: Array<number> = [], i: number = 0): number {
    if (i >= arr.length - 1) return arr[i]
    return arr[i] + sumArr(arr, i + 1)
}