// Obtém os elementos do DOM
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")

// Variável resultado
const resultado = document.getElementById("resultado")

function limparCampos() {
    valor1.value = ""
    valor2.value = ""
}

function tempo() {
    setTimeout(function() {
        resultado.innerHTML = 0
    }, 1000)
}

// Criando função somar

function somar(event) {
    event.preventDefault();
    let resultadoSoma = Number(valor1.value) + Number(valor2.value)
    resultado.innerHTML = resultadoSoma

    //Limpar campos
    limparCampos()

    // função tempo
    tempo()

}

// Criando função subtrair

function sub(event) {
    event.preventDefault();
    let resultadoSub = Number(valor1.value) - Number(valor2.value)
    resultado.innerHTML = resultadoSub

    limparCampos()

    tempo()

}

// Criando função multiplicar

function mult(event) {
    event.preventDefault();
    let resultadoMult = Number(valor1.value) * Number(valor2.value)
    resultado.innerHTML = resultadoMult

    limparCampos()

    tempo()

}

// Criando função dividir

function divi(event) {
    event.preventDefault();
    let resultadoDivi = Number(valor1.value) / Number(valor2.value)
    resultado.innerHTML = resultadoDivi

    limparCampos()

    tempo()

}