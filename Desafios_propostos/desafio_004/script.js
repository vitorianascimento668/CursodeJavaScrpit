function Contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){  
        window.alert('Falta dados')
        res.innerHTML = 'Impossivel contar'
        
    } else {
        res.innerHTML = 'Contando ...<br>'
        let i = Number(txtinicio.value)
        let f = Number(txtfim.value)
        let p = Number(txtpasso.value)
        if (p <= 0){
            p = 1
            alert('Passo invalido! Considerando PASSO 1 ')
        }
        if (i < f){
            //crescente
        for (let c = i; c <= f; c += p){
            res.innerHTML += `\u{1F449} ${c}`
        }
        }else{
            //regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `\u{1f449}  ${c}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}