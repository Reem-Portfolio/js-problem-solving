

function reverseString(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

var input = prompt("enter the text to reverse = ");
console.log( reverseString(input));