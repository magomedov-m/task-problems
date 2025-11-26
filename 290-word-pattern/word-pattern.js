/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let letter_word = new Map();
    let word_letter = new Map();
    let words = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        if (letter_word.has(pattern[i]) || word_letter.has(words[i])) {
            let getWord = letter_word.get(pattern[i]); // dog
            let getLetter = word_letter.get(getWord); // a

            if (getLetter !== pattern[i] || getWord !== words[i]) return false;
        }

        letter_word.set(pattern[i], words[i]); // a: dog
        word_letter.set(words[i], pattern[i]); // dog: a
    }

    return true;
};
// l_w = a: dog; b: cat; 
// w_l = dog: a; cat: b; 
//  a  b   c
//         ^
// dog cat dog