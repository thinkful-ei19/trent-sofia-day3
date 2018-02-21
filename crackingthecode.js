// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. 
// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, 
// and then return the fully decoded message as a string.

// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word 
// determines which of the remaining four characters contains the decoded character according to this table:

// First letter	Character number
// a	2
// b	3
// c	4
// d	5
// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so 
// you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.


function decodeWords(words) {
	let splitWords = words.split(' ');
	let decoder = {
		'a' : 2,
		'b' : 3,
		'c' : 4,
		'd' : 5
	};
	let decodeKey = Object.keys(decoder)
	let answer =splitWords.map(word => {
		if (decodeKey.includes(word[0])) {
			return word[decoder[word[0]] - 1];
		} else {
			return ' ';
		}
	});
	return answer.join('');


}

console.log(decodeWords('craft block argon meter bells brown croon droop'));




