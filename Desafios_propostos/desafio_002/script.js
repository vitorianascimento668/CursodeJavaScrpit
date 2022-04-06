function verificar(){
var sexo = window.document.getElementById('txtsexo').value
var img = window.document.getElementById('foto_1')
 var ano_nasc = window.document.getElementById('txtano')
var data = new Date()
ano_atual = data.getUTCFullYear()
var res = window.document.getElementById('res')
var nasc = Number(ano_nasc.value)
var corpo = document.body
corpo.style.height = '50vh'
subtracao = ano_atual - nasc
    if (sexo == 'F'){res.innerHTML = 'Detectamos MULHER com ' 
         if(subtracao >= 0 && subtracao < 12){
            res.innerText += ` ${subtracao} anos.`
            img.src = 'imagens/foto-bebe-f.png'
        }else if (subtracao >= 12 && subtracao < 22){
            res.innerHTML += ` ${subtracao} anos. `
            img.src = 'imagens/foto-jovem-f.png'}
            else if(subtracao >= 22 && subtracao < 60) {
            res.innerHTML += ` com ${subtracao} anos.`
            img.src = 'imagens/foto-adulto-f.png'
            } else {
                res.innerHTML += `com ${subtracao} anos.`
                img.src = 'imagens/foto-idoso-f.png'
            }}
    if (sexo == 'M'){res.innerHTML = 'Detectamos HOMEM com'
           if(subtracao >= 0 && subtracao < 12) {
            res.innerHTML += `com ${subtracao} anos.`
            img.src = 'imagens/foto-bebe-m.png'
        }
        else if(subtracao >= 12 && subtracao < 22){
            res.innerHTML += ` com ${subtracao} anos.`
            img.src = 'imagens/foto-jovem-m.png'
        }
        else if (subtracao >= 22 && subtracao < 60) {
            res.innerHTML += ` com ${subtracao}`
            img.src = 'imagens/foto-adulto-m.png'
        } else {
            res.innerHTML += ` com ${subtracao}`
            img.src = 'imagens/foto-idoso-m.png'
        }}
    }



    //subtracao = ano_atual - nasc
    //res.innerHTML = `A sua idade é de ${subtracao} anos.`