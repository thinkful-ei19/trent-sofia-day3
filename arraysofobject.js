// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.


function createObject(name, jobTitle) {
	return {
		name,
		jobTitle
	}
}

let object1 = createObject('Trent', 'Student');
let object2 = createObject('Sofia', 'Student2');
let object3 = createObject('Rich', 'Engineer');
let object4 = createObject('Josh', 'coolengineer');

let arrayObj = [object1, object2, object3, object4];
 

for (let i = 0; i < arrayObj.length; i++) {
	console.log(`${arrayObj[i].name} : ${arrayObj[i].jobTitle}`);
}
