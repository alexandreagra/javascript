const agora = new Date()
const hora = agora.getHours()
const min = agora.getMinutes()

if (hora >= 1 && hora < 12){
    console.log(`Bom dia, são ${hora} horas e ${min} minutos!`)
}
else if(hora ===1){
    console.log(`Boa tarde, são ${hora} hora e ${min} minutos!`)
}
else if(hora >= 12 && hora < 18){
    console.log(`Boa tarde, são ${hora} horas e ${min} minutos!`)
}
else{
    console.log(`Boa noite, são ${hora} horas e ${min} minutos!`)
} 