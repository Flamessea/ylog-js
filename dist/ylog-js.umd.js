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

    function parseTime(timestamp, cFormat) {
        if (cFormat === void 0) { cFormat = '{y}-{m}-{d} {h}:{i}'; }
        if (arguments.length === 0 || !timestamp) {
            return '';
        }
        var date;
        if (typeof timestamp === 'object') {
            date = timestamp;
        }
        else {
            if ((typeof timestamp === 'string')) {
                if ((/^[0-9]+$/.test(timestamp))) {
                    // support "1548221490638"
                    timestamp = parseInt(timestamp);
                }
                else {
                    // support safari
                    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                    timestamp = timestamp.replace(new RegExp(/-/gm), '/');
                }
            }
            if ((typeof timestamp === 'number') && (timestamp.toString().length === 10)) {
                timestamp = timestamp * 1000;
            }
            date = new Date(timestamp);
        }
        var formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        };
        return cFormat.replace(/{([ymdhisa])+}/g, function (result, key) {
            // @ts-ignore
            var value = formatObj[key];
            // Note: getDay() returns 0 on Sunday
            if (key === 'a') {
                return ['日', '一', '二', '三', '四', '五', '六'][value];
            }
            return value.toString().padStart(2, '0');
        });
    }

    exports.parseTime = parseTime;
    exports.sumArr = sumArr;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
