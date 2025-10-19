
function Anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const sortStr1 = str1.split("").sort().join("");
    const sortStr2 = str2.split("").sort().join("");
    return sortStr1 === sortStr2;
}
const str1= prompt("enter text 1 : ");
const str2= prompt("enter text 2 : ");
console.log(Anagrams(str1,str2));
