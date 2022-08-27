// This is a code for finding out the longest word from array dictionary which is subsequence to a string sequence
// subsequence means for example `ant` => `ajnmot`, and not the `atomic` 
// In this variant, I am defining the test variables. But you can import your data and use it properly
// We need to find the largest string of array, then transform the string to map object of letters and positions, then we need to find out if is a word subsequence of the string
// with all of this, we can create main function and find the longest match
function isLongest(array) {                           // helper function for finding out the longest word in array;
    let ls = "";
    for (let word of array) {
        if (word.length > ls.length) {
            ls = word;
        }
    }
    return ls;
};

function stringToMap(string) {                         // helper function for time and memory efficiency we transform string to object
    let map = {};
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (map[letter]) {
            map[letter].push(i);
        } else {
            map[letter] = [i];
        }
    }
    return map;
};

function findNextIndex(array, minIndex, ___) {              // helper function for getting index of position
    for (var index of array) {
        if (index >= minIndex) {
            return index + 1;
        }
    }
    return false;
};

function isSubsequence(word, map) {                         // helper function for finding out if the word is subsequence of the string. If yes, then it will push it to array
    let minIndex = 0;                                       
    for (let letter of word) {
        if (map[letter]) {
            minIndex = findNextIndex(map[letter], minIndex);   //it is using helpfunction findNextIndex
            if (minIndex === false) {
                return false;
            }

        } else {
            return false;
        }
    }
    return true;
}

function longestMatch(string, dictionary) {                 // main function which calls other helper functions
    let subsequence = [];
    let map = stringToMap(string);                            
    for (var element of dictionary) {
        if (isSubsequence(element,map)) {
            subsequence.push(element);
        }
    }
    return isLongest(subsequence);
}

var stringSequence = `apppleboosahheesagnsaoooiilla`;    // you can import whatever string and/or dictionary you want
var dictionary = [`apple`, `snake`, `love`];
console.log(stringSequence);
console.log(dictionary);
console.log(longestMatch(stringSequence, dictionary));   // calling the main function with a lot of helper ones