let count = 0

let increaseButton = document.getElementById('increase')
let decreaseButton = document.getElementById('decrease')
let resetButton = document.getElementById('reset')
let countText = document.getElementById('value')

increaseButton.addEventListener('click',function(){
    count = count + 1
    countText.textContent = count
    

})
decreaseButton.addEventListener('click',function(){
    count = count - 1
    countText.textContent = count
    

})
resetButton.addEventListener('click',function(){
    count = 0
    countText.textContent = count
    

})

