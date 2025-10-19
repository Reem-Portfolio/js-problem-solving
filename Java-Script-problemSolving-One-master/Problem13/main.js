
function UniqueNumbers(arr) {
    return arr.filter(
        (num, index, array) => array.indexOf(num) === array.lastIndexOf(num)
    );
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = UniqueNumbers(numbers);
console.log(result);
