
function RemovesValues(arr){
    return arr.filter(Boolean);
}
const numbers =[0, false, "Hello", "", null, undefined, NaN, 42];
const result = RemovesValues(numbers);
console.log(result);
