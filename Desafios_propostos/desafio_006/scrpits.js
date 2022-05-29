var num = document.getElementById('txtnum') //recebe o numero do usuario
var array = []
var res = document.getElementById('resposta')  //aparece no quadro do select
var resbaixo = document.getElementById('finalizacao') // Aparece abaixo de tudo, faz parte da 2 div
var nume = 0 //ARRAY 
var cad = 0 /*variavel de número de cadastro */ 
var media = 0 //Variavel de média
var maior = 0 //Variavel de maior numero
var menor = 0 //Variavel de menor nímero
var soma = 0 // variavel de soma

function adicionar(){ 
    resbaixo.innerHTML = '' // Para apagar tudo quando começa  a add novos números
    var nume = Number(txtnum.value) // converte o valor digitado
    let pos = array.indexOf(Number(num.value))
    if ((Number(num.value) < 1 || Number(num.value) > 100) || (num.value.length == 0) || (array.includes(nume))  )   { 
        alert('valor invalido')  
    }// teste logico do valor nulo e maior que 100
    
    else{
        var item = document.createElement('option') // criando o elemento OPTION no bloco acima
        item.text = `Valor ${nume} adicionado` // texto sendo add dentro dele
        res.appendChild(item) //aparece na tela o resto acima, dentro do select 
        array.push(Number(num.value)) } 
        cad += 1
        soma += nume
        media = soma / cad
        if (nume > maior){
            maior = nume
        } 
        if (menor == 0){
            menor = nume //teste logico
        }
        if (nume < menor){
            menor = nume
            item.text = ''
        }
        num.value = ''
        num.focus()
    }
    

    
            
  
function finalizar() {
    if (res.length == 0){ // ERRADO, TENTA ARRUMAR DEPOIS
        alert('ERRO, adicione valores antes de finalizar')
    }else {
    resbaixo.innerHTML = `<p>Ao todo, temos ${cad} números cadastrados</p>`
    resbaixo.innerHTML += `<p>Somando todos os valores, temos ${soma}</P>`
    resbaixo.innerHTML += `<p> O maior valor digitado foi o ${maior}</p>`
    resbaixo.innerHTML += `<p> O menor valor digitado foi o ${menor}</p>`
    resbaixo.innerHTML += `<p>A média dos valores digitado é ${media}</p>`

    }
}
