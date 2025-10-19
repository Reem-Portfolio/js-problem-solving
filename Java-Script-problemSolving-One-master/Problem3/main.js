
function Reverse(word){
    return word.split('').reverse().join('');
}
var text = prompt("enter the text to reverse = ");
console.log(Reverse(text));
