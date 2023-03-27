'use stricit'

const formatarDigito = (digito) => `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    const segundo = document.getElementById('segundo')
    const minuto = document.getElementById('minuto')
    const horas = document.getElementById('hora')
    const dia = document.getElementById('dia')

    const qtdSegundos = tempo % 60
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdDias = Math.floor(tempo / (86400))

    segundo.textContent = formatarDigito(qtdSegundos)
    minuto.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras)
    dia.textContent = formatarDigito(qtdDias)
    
}

const contagerRegressiva = (tempo) => {
    pararContagem = () => clearInterval(id) 
    
    const contar = () => {
        if(tempo == 0) pararContagem()
        atualizar(tempo)
        tempo --
    }
    const id = setInterval(contar, 1000);
}

contagerRegressiva((60*60*24) + 30);



