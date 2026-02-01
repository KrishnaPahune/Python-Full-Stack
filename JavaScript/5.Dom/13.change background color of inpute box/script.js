let inputBox = document.getElementById('nameInput')

inputBox.addEventListener('focus',function(){
    inputBox.style.backgroundColor ='gold'
})
inputBox.addEventListener('blur',function(){
    inputBox.style.backgroundColor ='white'
})