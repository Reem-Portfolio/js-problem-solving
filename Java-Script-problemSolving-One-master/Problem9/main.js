
function FilterDivisible(arr){
    return arr.filter(num=>num%2===0 || num%3===0);
}
const array=[1, 2, 3, 4, 5, 6, 7, 8, 9];
const result= FilterDivisible(array);
console.log("result = ", result);
