
function Property(obj, prop) {
    return obj.hasOwnProperty(prop);
}
console.log(Property({name: "Alice", age: 25}, "name"));
console.log(Property({name: "Alice", age: 25}, "address"));
