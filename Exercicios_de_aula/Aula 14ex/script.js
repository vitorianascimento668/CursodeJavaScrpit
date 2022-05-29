function contar () {
    var inicio =  Number(window.document.getElementById('txtinicio').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = '<p>Contando:</p>'
    if (passo == 0){
        window.alert('Passo invalido, considerando passo 1')
        passo = 1
    }
    if(inicio == 0 || fim == 0) {
        resposta.innerHTML = 'Impossivel contar'
        return true;
    }
    for (var c = inicio; c >= fim; c = c - passo) {
        resposta.innerHTML += ' 👉 '+ c
    }   
    for (fim; inicio <= fim; inicio = inicio + passo ){
        resposta.innerHTML += ' 👉 '+ inicio 
    
    }

    
    
    resposta.innerHTML += ' 🏁'
        
}
        
