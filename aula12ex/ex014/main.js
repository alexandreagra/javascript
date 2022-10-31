window.onload = function carregar() {

const msg = document.querySelector('#msg')
const img = document.querySelector('#foto')
const data = new Date()
const hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    // BOM DIA
    document.body.style.background = '#e2cd9f'
    img.src = 'manha.png'
}

else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
}

else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#515154'
}

}
