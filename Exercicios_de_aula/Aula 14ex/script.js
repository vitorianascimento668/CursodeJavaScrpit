function contar () {
    var inicio =  Number(window.document.getElementById('txtinicio').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    if (passo == 0){
        window.alert('Passo invalido, considerando passo 1')
        passo = 1
    }
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = '<p>Contando:</p>'
        for (inicio; inicio <= fim; inicio = inicio + passo){
            resposta.innerHTML += ' 👉 '+ inicio 
        }
        resposta.innerHTML += ' 🏁'

}
