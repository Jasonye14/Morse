//Morse Code Table
const CodeTable = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....","..", ".---", 
"-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", 
"..-", "...-", ".--", "-..-", "-.--", "--.."];  
//random position
var position = Math.floor(Math.random()*WORDS.length);
// random quotes from araay
var quoteString = JSON.stringify(WORDS[position]).replace(/["]+/g, '');
// put the quote in individaul word arrays
function wordArray(){
var words = quoteString.split(" ");
return words;
}
var wordsGlobal = wordArray();
//scrmables the individual words
function scramble(words){
for(var i=0; i<words.length; i++){
words[i] = shuffle(words[i].toUpperCase()); // shuffle and converts it to uppercase
}
return words;
}
function getRandomInt(n) {
return Math.floor(Math.random() * n);
}
function shuffle(s) {
var arr = s.split('');           // Convert String to array
var n = arr.length;              // Length of the array
s = arr.join('');                // Convert Array to string
return s;                        // Return shuffled string
}
function nextChar(c) {
return String.fromCharCode(c.charCodeAt(0) + 1);
}

var scrambledArray = scramble(wordsGlobal);
//generator, convert quotes in to morse code
function generate(string){
string = string.toString(string);
var codeString;
var key = "A";
for(var i=0; i<26; i++){
codeString = string.replaceAll(key, CodeTable[i]);
// console.log(codeString);
// console.log("key: " + key);
// console.log("code: " + CodeTable[i]);
string = codeString;
key = nextChar(key);
}

return codeString;
}
for(var i=0; i<scrambledArray.length; i++){
scrambledArray[i] = generate(scrambledArray[i]);
}
//console.log(quoteString);

$(".cipher").text(scrambledArray);