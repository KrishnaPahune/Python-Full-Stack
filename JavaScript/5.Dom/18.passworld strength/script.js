let passwordInpute = document.getElementById('password')
let message = document.getElementById('message')
let strength = document.getElementById('strength')

passwordInpute.addEventListener('input',function(){
if(passwordInpute.value.length>0){
    message.style.display = 'block'


}else{
    message.style.display ='none'
    passwordInpute.style.borderColor='white'
}

if(passwordInpute.value.length > 0 && passwordInpute.value.length <=4){
    strength.textContent= 'weak'
    message.style.color = 'red'
    passwordInpute.style.borderColor='red'


}else if(passwordInpute.value.length >= 5 && passwordInpute.value.length <=8){
    strength.textContent= 'Moderate'
    message.style.color = 'yellow'
    passwordInpute.style.borderColor='yellow'
}else if(passwordInpute.value.length >= 9 && passwordInpute.value.length <=12){
    strength.textContent= 'strong'
    message.style.color = 'green'
    passwordInpute.style.borderColor='green'
}
 })