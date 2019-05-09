// DRY characters (20 mins)

// CHALLENGE

// Good coders don't ever repeat themlselves.
// Write a function nonRepeatingCharacter that 
// takes a string input and return the first 
// character that is not repeated anywhere else.
// e.g. `nonRepeatingCharacter('hello') ===> 'h'`
// To complicate things more, lower and uppercase 
// characters are considered the same character, but
// your function will return the correct case.
// e.g. `nonRepeatingCharacter('Hello') ===> 'H'`
// If all the characters are repeated at least once or
// there are no characters, an empty string ('') should 
// be returned.

// EXAMPLES

// nonRepeatingCharacter('whatever') == 'w'
// nonRepeatingCharacter('CoDecoRs') == 'D'
// nonRepeatingCharacter('aBbesA') == 'e'

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.

function nonRepeatingCharacter (string) {
  // your code here. Enjoy the music. (please do)
  let copy = string.toLowerCase().split('');

  for (let i=0; i<string.length; i++) {
    let letter = copy.splice(i, 1)[0];
    if (copy.indexOf(letter) === -1) return string[i];
    copy.splice(i, 0, letter);
  }

  return '';
  
} 

module.exports = nonRepeatingCharacter;