function convertToVowels(word) {
    let vowelString = "";
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
            vowelString += word.charAt(i);
        }
    }
    return vowelString;
}

const word = 'thisissomeword';
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels);
console.log(convertToVowels("hello world"));