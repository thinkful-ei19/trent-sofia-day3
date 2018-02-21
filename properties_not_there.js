// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


function createBoss(name, jobTitle, boss) {
	return {
		name,
        jobTitle, 
        boss
	}
}
function createOwner(name, jobTitle) {
	return {
		name,
		jobTitle
	}
}

let object1 = createBoss('Trent', 'Student', 'Bill Gates');
let object2 = createBoss('Sofia', 'Student2','Bill Gates');
let object3 = createBoss('Rich', 'Engineer', 'Jeff Bezos');
let object4 = createOwner('Bill Gates', 'CEO');

let arrayObj = [object1, object2, object3, object4];
 

for (let i = 0; i < arrayObj.length; i++) {
    if(!arrayObj[i].boss){
      console.log(`${arrayObj[i].jobTitle} ${arrayObj[i].name} doesn't report to anybody.`);
    }
    else{
      console.log(`${arrayObj[i].jobTitle} ${arrayObj[i].name} reports to ${arrayObj[i].boss}`);
    }
}

