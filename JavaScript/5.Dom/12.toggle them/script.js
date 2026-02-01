let button = document.getElementById('theme-toggle')
let currentTheme ='light'
button.addEventListener('click',function(){
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')
    if(currentTheme=='light'){
        button.textContent = ' light Theme'
        currentTheme='dark'
    }else{
        button.textContent='dark theme'
        currentTheme='light'

    }
})