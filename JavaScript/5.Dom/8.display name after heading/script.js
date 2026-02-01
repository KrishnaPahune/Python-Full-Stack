let inputeBox = document.getElementById('nameInput')
let spanText = document.getElementById('name')

inputeBox.addEventListener('input',function(){
    spanText.textContent= inputeBox.value
    
})