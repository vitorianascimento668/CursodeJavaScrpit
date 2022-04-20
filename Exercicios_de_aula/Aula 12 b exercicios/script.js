function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 ||  fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
    var fsexo = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsexo[0].checked){
        genero = 'homem'
        if (idade >= 0 &&  idade < 12) {
            img.setAttribute ('src' , 'imagens/foto-bebe-m.png')
        }else if (idade < 22 ){
            img.setAttribute('src', 'imagens/foto-jovem-m.png')
            //jovem
        }else if (idade < 60){
            img.setAttribute('src', 'imagens/foto-adulto-m.png')
        }else{
            img.setAttribute('src' , 'imagens/foto-idoso-m.png')
        }
    } else if (fsexo[1].checked){
        genero = 'mulher'
        if(idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/foto-bebe-f.png')
        }else if (idade < 22){
            img.setAttribute('src','imagens/foto-jovem-f.png')
        }else if (idade < 60){
            img.setAttribute('src','imagens/foto-adulto-f.png')

        }else {
            img.setAttribute('src','imagens/foto-idoso-f.png')

        }
       
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}
}