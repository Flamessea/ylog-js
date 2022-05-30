function sumArr(arr, i) {
    if (arr === void 0) { arr = []; }
    if (i === void 0) { i = 0; }
    if (i >= arr.length - 1)
        return arr[i];
    return arr[i] + sumArr(arr, i + 1);
}

export { sumArr };
