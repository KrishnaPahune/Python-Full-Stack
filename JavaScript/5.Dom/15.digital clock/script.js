let timeDiv = document.getElementById('clock')


setInterval(function(){
    let date = new Date()

timeDiv.textContent = date.toLocaleTimeString()

},1000)