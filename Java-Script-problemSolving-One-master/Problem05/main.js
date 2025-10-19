
function Filter(arr){
    return arr.filter(function(number) {
        return number % 2 === 0; // Check if the number is even
    });
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(Filter(numbers));
