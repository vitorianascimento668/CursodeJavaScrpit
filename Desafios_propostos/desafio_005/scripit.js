function botao(){
var numero = document.getElementById('txtnum')
var resposta = document.getElementById('resposta')
if (numero.value.length == 0){
    alert('Por favor digite um número! ')
    resposta.innerHTML = 'Programa finalizado por falta de digito!'
}else{
    num = Number(txtnum.value)
var res = 10
var multiplicador = 1
    resposta.innerHTML = '<p>O resultado irá aparece abaixo</p>'
    while(multiplicador <= 10){
        res = multiplicador * num
        resposta.innerHTML +=  num + ' X ' + multiplicador + ' = '+res +'<br>'
        multiplicador++
    }
}

        
}

    