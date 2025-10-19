
function GetKey(obj){
    return Object.keys(obj);
}
const person={name: "John", age: 30};
const result= GetKey(person);
console.log(result);
