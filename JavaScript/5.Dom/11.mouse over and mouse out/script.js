let button = document.getElementById('hoverBtn')
button.addEventListener('mouseover',function(){
    button.style.backgroundColor = 'black'
    button.style.color ='white'
})
button.addEventListener('mouseout',function(){
    button.style.backgroundColor = 'white'
    button.style.color ='black'
})