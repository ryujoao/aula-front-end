const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const button = document.querySelector("button")
const lista = document.querySelector(".lista")

function clearInput() {
    nome.value = ""
    email.value = ""
    senha.value = ""
}

// Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = `${nome.value}${email.value}${senha.value}`
    const templateHTML = `<li>${inputValue}</li>`

    lista.innerHTML += templateHTML

    clearInput()
})