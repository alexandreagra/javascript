const clicou = document.querySelector('#botao')
clicou.addEventListener('click', calcular)

function calcular() {
    var txtv = document.querySelector('#itxtvel')
    var res = document.querySelector('#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!`
    }
    else {
        res.innerHTML += `<p>Sua velocidade está adequada</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}





