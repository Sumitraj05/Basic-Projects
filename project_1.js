//        Guess The Number

let num = Math.random();
let rand_num = Math.round(num * 100);
// console.log(rand_num);
let end = true;
let attempts = 0;
while (end) {
    let ans = prompt("Enter your Guess between 0 to 100 ?", 45);
    let change = parseInt(ans);
    attempts = attempts+1;
    if (change == rand_num) {
        end = false;
        console.log("Woho! Yo Guessed Correct at " + attempts + " attempts");
        alert("Woho! Yo Guessed Correct at " + attempts + " attempts")
    }
    else if(change<rand_num) {
        alert("You guessed Wrong less than real number Try again ")
    } 
    else{
        alert("You guessed Wrong greater than real number Try again ")
    }
}




