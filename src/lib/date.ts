export function parseTime(timestamp: number | string | Date, cFormat: string = '{y}-{m}-{d} {h}:{i}'): string {
    if (arguments.length === 0 || !timestamp) {
        return ''
    }
    let date
    if (typeof timestamp === 'object') {
        date = timestamp
    } else {
        if ((typeof timestamp === 'string')) {
            if ((/^[0-9]+$/.test(timestamp))) {
                // support "1548221490638"
                timestamp = parseInt(timestamp)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                timestamp = timestamp.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof timestamp === 'number') && (timestamp.toString().length === 10)) {
            timestamp = timestamp * 1000
        }
        date = new Date(timestamp)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    return cFormat.replace(/{([ymdhisa])+}/g, (result, key) => {
        // @ts-ignore
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
}