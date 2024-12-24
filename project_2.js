//       Snake, Water, Gun Game 

alert("Lets Play The Game --> 1 for Snake , 2 for Water , 3 for Gun")
let bool = true;
while (bool) {
    let num = Math.ceil(Math.random() * 3);
    let a = prompt("Enter Your Answer ( 1 for Snake)(2 for Water)(3 for Gun)")
    let ans = parseInt(a);
    if (ans == num) {
        console.log("Match Draw")
        console.log("Both Selected Same");
        alert("Match Draw Both Selected Same");
    }
    else if ((ans == 1 && num == 2) ){
        console.log("You Won!")
        console.log("You Answer = Snake and Computer Answer = Water");
        alert("You Won! You Answer = Snake and Computer Answer = Water")
    }
    else if (ans == 1 && num == 3) {
        console.log("You Loss!")
        console.log("You Answer = Snake and Computer Answer = Gun");
        alert("You Loss! You Answer = Snake and Computer Answer = Gun")
    }
    else if (ans == 2 && num == 1) {
        console.log("You loss!")
        console.log("You Answer = Water and Computer Answer = Snake");
        alert("You loss! You Answer = Water and Computer Answer = Snake");
    }
    else if (ans == 2 && num == 3) {
        console.log("You Won!")
        console.log("You Answer = water and Computer Answer = Gun");
        alert("You Won! You Answer = water and Computer Answer = Gun");
    }
    else if (ans == 3 && num == 2) {
        console.log("You loss!")
        console.log("You Answer = Gun and Computer Answer = Water");
        alert("You loss! You Answer = Gun and Computer Answer = Water");
    }
    else if (ans == 3 && num == 1) {
        console.log("You Won!")
        console.log("You Answer = Gun and Computer Answer = Snake");
        alert("You Won! You Answer = Gun and Computer Answer = Snake");
    }
    let next = prompt("Want to play more type yes or no");
    if (next == "no") {
        bool = false;
    }
}
