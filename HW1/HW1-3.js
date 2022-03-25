function reverse(word) {

    let reverseString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseString += word[i];
    }
    return reverseString;

}

const word = 'hello';
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'