function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else{
        tab.innerHTML = ``
        let n = Number(num.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}