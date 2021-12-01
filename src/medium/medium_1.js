import {variance, variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0
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
    array.sort();
    var half = Math.floor(array.length/2);
    if (array.length % 2) {return array[half];}
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
    array.sort();
    var sum = 0;
    var median = 0;
    var half = Math.floor(array.length/2);
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (array.length % 2) {
        median = array[half];
    }
    else{
        median = (array[half-1]+array[half])/2.0;
    }
    var mean = sum/array.length;
    var variance = variance(array, mean);
    
    return '{min: ' + Math.min(...array) + ', median: ' + median + ', max: ' + Math.max(...array) + ', variance: ' + variance + ', mean: ' + mean + ', length: ' + array.length + ', sum: ' + sum + ', standard_deviation: ' + Math.sqrt(variance) + '}';
}

