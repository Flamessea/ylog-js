(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ylog-js"] = {}));
})(this, (function (exports) { 'use strict';

    function sumArr(arr, i) {
        if (arr === void 0) { arr = []; }
        if (i === void 0) { i = 0; }
        if (i >= arr.length - 1)
            return arr[i];
        return arr[i] + sumArr(arr, i + 1);
    }

    exports.sumArr = sumArr;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
