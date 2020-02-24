exports.min = function min(array) {

    let min = 0;
    try {
        for (let index = 0; index < array.length; index++) {
            if (min > array[index])
                min = array[index];

        }
    } catch {
        return "0";
    }

    return min;
}

exports.max = function max(array) {

    let max = 0;
    try {
        for (let index = 0; index < array.length; index++) {
            if (max < array[index])
                max = array[index];
        }
    } catch {

    }
    return max;

}

exports.avg = function avg(array) {
    if (array === undefined || array[0] === undefined) return 0;
    let sum = 0;
    try {
        for (let index = 0; index < array.length; index++) {
            sum = sum + array[index];
        }
        sum = sum / array.length;
    } catch {}

    return sum;


}