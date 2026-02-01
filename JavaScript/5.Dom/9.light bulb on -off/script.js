let bulbImage = document.getElementById('myImage')
let actionText = document.getElementById('action')
let lightOn = false

bulbImage.addEventListener('click',function(){
    if(lightOn === false){
 bulbImage.setAttribute('src','bulbon.gif')
 lightOn =  true 
 actionText.textContent = "OFF"
    }else{
        bulbImage.setAttribute('src','bulboff.gif')
 lightOn =  false 
  actionText.textContent = "ON"

    }
   
})