class Password {
    constructor() {
        console.log("Welcome to the Password Generator ")
        this.pass = ""
    }

    generatepass(len) {
        let char = "abcdefghijklmnopqrstuvwxyz"
        let num = "1234567890"
        let special = "!@$%^&*~"
        if (len < 3) {
             console.log("Password length should be more than 3")
            }
        else {
            let i = 0;
            while (i < len) {
                this.pass += char[Math.floor(Math.random()*char.length)];
                this.pass += num[Math.floor(Math.random()*num.length)];
                this.pass += special[Math.floor(Math.random()*special.length)];
                i += 3
            }
            this.pass = this.pass.substring(0, len)
            return this.pass;
        }
      }  
}

let p = new Password();
console.log(`The Password is - `+p.generatepass(7))
