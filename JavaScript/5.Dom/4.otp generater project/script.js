let digits = '0123456789'
let otp =''

for (i=0; i<6; i++){
    let randomIndex = Math.floor(Math.random()*10)

    let randomChar = digits[randomIndex]
    otp =otp + randomChar

}
console.log(otp)


