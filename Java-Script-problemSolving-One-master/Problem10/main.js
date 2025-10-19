
function IndexArray(arr, num) {
    const index = arr.indexOf(num);
    return index !== -1 ? index : -1;
}
const input = [1, 2, 3, 4, 5];
console.log(IndexArray(input, 3));
console.log(IndexArray(input, 10));
