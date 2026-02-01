let hexDigits ='0123456789abcdef'



let button = document.querySelector('button')
let spantext = document.querySelector('.color')



button.addEventListener('click',function(){
    let hexCode ='#'
for(i=0;i<6;i++){

let randomIndex = Math.floor(Math.random()*16)
hexCode = hexCode + hexDigits[randomIndex]

}
console.log(hexCode)
spantext.textContent = hexCode



 document.body.style.backgroundColor = hexCode
})


