const clicou = document.querySelector('#botao')
clicou.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescentemas.png')
            } else  if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescentefem.png')
            } else  if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
