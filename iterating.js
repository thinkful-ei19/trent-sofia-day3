// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

let object = {
    foo : 'a',
    bar : 'b',
    fum : 'c',
    quux : 'd',
    spam : 'e'

};

for(element in object){
    console.log(`${element}:${object[element]} `);
}
