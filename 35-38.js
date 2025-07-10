// function CurDate(){
//     var today = new Date()
//     alert(today)
// }
// CurDate()

// function FullName(){
// var first = prompt('what is your first name')
// var last = prompt('what is your last name')
//     alert('welcome ' + first + " " + last)
// }
// FullName()

// function Sum(){
//       var firstN = +prompt('what is your first num')
//     var lastN = +prompt('what is your last num')
//     alert(firstN + lastN)
// }
// Sum()

// function calC(){
//     var first_num = +prompt('Enter your first num');
// var operation = prompt('Enter your operation');
// var second_num = +prompt('Enter your second num');

// if (operation == '+') {
//     alert('Your result is ' + (first_num + second_num));
// } else if (operation == '-') {
//     alert('Your result is ' + (first_num - second_num));
// } else if (operation == '*') {
//     alert('Your result is ' + (first_num * second_num));
// } else if (operation == '/') {
//     alert('Your result is ' + (first_num / second_num));
// } else {
//     alert('Error! Please enter a valid operation.');
// }

// }
// calC()

// function square(num1){
//     var num2 = num1 * num1
//     alert(num2)
// }
// square(3)

// function fac(){
// var numF = +prompt('enter a num');
// var fac = 1;
// for (var i = numF; i >= 1; i--) {
//     fac = fac * i;
// }
// alert("The factorial of " + numF + " is " + fac);
// }
// fac()

// function Counting(){
//     var start = +prompt('enter your number')
//     var end = +prompt('enter your end input')
//     for(i = start ; i <= end ; i++){
//         console.log(i)
//     }
// }
// Counting()

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
// }

// var b = 3;
// var p = 4;
// var h = calculateHypotenuse(b, p);
// console.log("Hypotenuse is: " + h);

// function area(width,height){
// var area = width * height
// alert('the area of given arguments is ' + area)

// }
// area(3,4)

// function area(){
//     var height = +prompt('enter the height of the rectengle')
//     var width = +prompt('enter the width of the rectengle')
//     var area = height*width
//     alert('the area of given height n width is ' + area)
// }
// area()

// function checkingPalindrome() {
//     var str = prompt('Enter any word you want to check if it\'s a palindrome or not');
//     var reversed = '';

//     for (var i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     if (reversed === str) {
//         alert("It is a palindrome");
//     } else {
//         alert("It is not a palindrome");
//     }
// }

// checkingPalindrome();

// function CapitalizeWord() {
//     var sentence = prompt("Enter a sentence:");
//     var words = sentence.split(" ");
//     var capital = [];

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         if (word.length > 0) {
//             var capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
//             capital.push(capitalized);
//         } else {
//             capital.push("");
//         }
//     }

//     var result = capital.join(" ");
//     alert("Capitalized sentence: " + result);
// }

// CapitalizeWord();


// function largestString() {
//     var string = 'Web Development Course';
//     var arr = string.split(' ');
//     var largest = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i].length > largest.length) {
//             largest = arr[i];
//         }
//     }

//     console.log("The largest word is:", largest);
// }

// largestString();
