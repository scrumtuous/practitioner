var magicNumber = Math.floor(Math.random() * 5);
playTheGame = function(guess) {
var response = "Nope. It's not " + guess;
if (guess > magicNumber)
response = response + ". Guess Lower!"
if (guess < magicNumber)
response = response + ". Guess Higher!"
if (guess == magicNumber) {
response = " Correct. The number was " + magicNumber + "."
magicNumber = Math.floor(Math.random() * 5);
}
document.getElementById('results').innerHTML = response;
} // end the method