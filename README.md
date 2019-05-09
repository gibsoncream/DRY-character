
# Algo Rithms Challenge // DRY character

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
`github.com/gibsoncream/DRY-character`.

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/gibsoncream/DRY-character`.

## 2. Challenge
Good coders don't ever repeat themlselves. Write a function nonRepeatingCharacter that takes a string input and return the first 
character that is not repeated anywhere else. 

e.g. `nonRepeatingCharacter('hello') ===> 'h'`

To complicate things more, lower and uppercase characters are considered the same character, but your function will return the correct case.

e.g. `nonRepeatingCharacter('Hello') ===> 'H'`

If all the characters are repeated at least once or there are no characters, an empty string ('') should be returned.

### 2.1. Examples

```js
Input               =>                  Output
---------------------------------------------------------------
nonRepeatingCharacter('whatever')   ==    'w'
nonRepeatingCharacter('CoDecoRs')   ==    'D'
nonRepeatingCharacter('aBbesA')     ==    'e'
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.