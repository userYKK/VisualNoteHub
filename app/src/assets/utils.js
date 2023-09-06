export function clone(params) {
    return {}
}
export function filterDate(timeStamp, startType) {

    if (!timeStamp) return "";
    const getHandledValue = (num) => {
        return num < 10 ? `0${num}` : num;
    };
    const d = new Date(timeStamp);
    const year = d.getFullYear();
    const month = getHandledValue(d.getMonth() + 1);
    const date = getHandledValue(d.getDate());
    const hours = getHandledValue(d.getHours());
    const minutes = getHandledValue(d.getMinutes());
    const second = getHandledValue(d.getSeconds());
    let resStr = "";
    if (startType === "year")
        resStr = `${year}-${month}-${date} ${hours}:${minutes}:${second}`;
    else resStr = `${month}-${date} ${hours}:${minutes}`;
    return resStr;
}

export function converFileSize(limit) {
    if (!limit) return limit;
    let size = "";
    if (limit < 1 * 1024) {
        // 如果小于0.1KB转化成B
        size = `${limit.toFixed(2)} B`;
    } else if (limit < 1 * 1024 * 1024) {
        // 如果小于0.1MB转化成KB
        size = `${(limit / 1024).toFixed(2)} KB`;
    } else if (limit < 1 * 1024 * 1024 * 1024) {
        // 如果小于0.1GB转化成MB
        size = `${(limit / (1024 * 1024)).toFixed(2)} MB`;
    } else {
        // 其他转化成GB
        size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }

    const sizestr = `${size}`;
    const len = sizestr.indexOf(".");
    const dec = sizestr.substr(len + 1, 2);
    if (dec === "00") {
        // 当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
}

export default { clone }