function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'midia/menino.png')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'midia/homem.png')
            }else if (idade < 50){
                //aduto
                img.setAttribute('src', 'midia/homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'midia/idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'midia/menina.png')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'midia/mulher.png')
            }else if (idade < 50){
                //aduto
                img.setAttribute('src', 'midia/mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'midia/idosa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}