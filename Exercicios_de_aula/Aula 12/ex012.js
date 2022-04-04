var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if(horas > 0 && horas < 4){
    console.log("Boa madrugada !!! ")
}else if  (horas > 4 && horas < 12){
    console.log('Bom dia! ')
}else if (horas <=18){
    console.log('Boa tarde! ')
}else if(horas <= 23 ) {
    console.log('Boa noite')}
