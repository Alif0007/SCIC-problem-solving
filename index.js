// Problem 1: Reverse a String
let a = "hello"
let b = a.split('').reverse().join('')

console.log(b);


// Problem 2: Count Vowels in a String
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(string) {
    let count = 0;

    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

// Problem 1: Palindrome

const word = prompt('Enter the word:').toLowerCase();
const reversedWord = word.split('').reverse().join('');

let result;

if (word === reversedWord) {
    result = word + " is a palindrome";
} else {
    result = word + " is not a palindrome";
}

console.log(result);

// Problem 4: Find the Maximum Number
const numbers = [5, 1, 9, 3, 23, 4]
let max = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);

// Problem 5: Remove Duplicates from an Array
const numbers = [5, 1, 9, 3, 23, 4, 23, 5, 5, 2, 3, 23]
let newarr = []

for (let i = 1; i < numbers.length; i++) {
    if (!newarr.includes(numbers[i])) {
        newarr.push(numbers[i]);
    }
}

console.log(newarr,);

// Problem 6: Sum of All Numbers in an Array
const numbers = [5, 1, 9, 3, 23, 4, 23, 5, 5, 2, 3, 23]
let sum = 0
for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum);

// Problem 7: Find Even Numbers in an Array
const numbers = [5, 1, 9, 3, 23, 4, 23, 5, 5, 2, 3, 23]
let evenNumber = []

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumber.push(numbers[i]);
    }
}

console.log(evenNumber);

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Problem 9: Find the Factorial of a Number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120

// Problem 10: PingPong Challenge
function pingPong() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}

pingPong();

