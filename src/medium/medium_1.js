import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort(function(a,b) {
        return a-b;
    });
    var half = Math.floor(array.length/2);
    if (array.length%2) {return array[half]}
    return (array[half-1]+array[half])/2.0;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    //array.sort();
    /*var len = array.length;
    var su = getSum(array);
    var med = getMedian(array);
    var men = su/array.length;
    var vari = variance(array, men);
    var maxNum = Math.max(...array);
    var minNum = Math.min(...array);
    var stddev = Math.sqrt(vari);*/

    const stats = {
        length: array.length,
        sum: getSum(array),
        mean: getSum(array)/array.length,
        median: getMedian(array),
        min: Math.min(...array),
        max: Math.max(...array),
        variance: variance(array, getSum(array)/array.length),
        standard_deviation: Math.sqrt(variance(array, getSum(array)/array.length))
    };
    return stats;

    /*const stats = {
        length: len,
        sum: su,
        mean: men,
        median: med,
        min: minNum,
        max: maxNum,
        variance: vari,
        standard_deviation: stddev
    };
    return stats;*/
    //return "{length: "+len+", sum: "+sum+", mean: "+mean+", median: "+median+", min: "+min+", max: "+max+", variance: "+vari+", standard_deviation: "+stddev+"}";
}

