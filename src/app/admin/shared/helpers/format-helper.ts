export function padNumber(num: number, size: number) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}