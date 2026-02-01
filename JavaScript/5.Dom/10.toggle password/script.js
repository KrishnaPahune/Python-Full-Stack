let image =document.getElementById('eyeicon')
let inputBox = document.getElementById('password')
let eyeOpen = false
image.addEventListener('click',function(){
    if(eyeOpen === false){
        image.setAttribute('src','eye-open.png')
        inputBox.type = 'text'
        eyeOpen =true
    }else{
          image.setAttribute('src','eye-close.png')
           inputBox.type = 'password'
        eyeOpen =false

    }
    
})