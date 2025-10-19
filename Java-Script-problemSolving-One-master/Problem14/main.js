
function CountChar (word){
    const charCount={};
    for (let char of word){
        charCount[char]=charCount[char] ? charCount[char]+ 1 : 1;
    }
    return charCount;
}
const word =prompt("please enter text");
const result = CountChar(word);
console.log(result);
