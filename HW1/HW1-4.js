function isPalindrome(word) {
    return word === reverse(word);
}

function reverse(word) {

    let reverseString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseString += word[i];
    }
    return reverseString;

}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));