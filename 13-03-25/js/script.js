/* Criando uma função */ 
function updateTime() {
    const timeDiv = document.querySelector("#time")
    const dataNew = new Date()

    const horas = String(dataNew.getHours()).padStart(2, "0")
    const mins = String(dataNew.getMinutes()).padStart(2, "0")
    const segs = String(dataNew.getSeconds()).padStart(2, "0")
    const mili = dataNew.getMilliseconds()

    // console.log(`${horas}:${mins}:${segs}:${mili}`)

    timeDiv.textContent = `${horas}:${mins}:${segs}` 
    
}

setInterval(updateTime,1000)

// Chamar a função
updateTime()
