let colors =['red','green','blue','orange','brown','cyan','purple']

let colortext = document.querySelector('.color')
// console.log(colors[randomIndex])
// console.log(randomIndex)

let button = document.getElementById('btn')

button.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random()*7)

    document.body.style.backgroundColor = colors[randomIndex]

    colortext.textContent = colors[randomIndex]
})

 
