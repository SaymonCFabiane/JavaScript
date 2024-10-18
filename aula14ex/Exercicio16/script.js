function contar(){
    var ini = Number(window.document.querySelector('input#ini').value)
    var fim = Number(window.document.querySelector('input#fim').value)
    var ps = Number(window.document.querySelector('input#ps').value)
    var cont = window.document.querySelector('div#cont')
    var i = ini
    
    if(ini <= 0){
        window.alert('Erro começaremos com 1')
        ini = 1
    }
    if(ps <= 0){
        window.alert('Erro Passo não pode começar com 0')
    }

    cont.innerHTML = 'Contando: '
    if(ini < cont){
   while(i <= fim){    
    cont.innerHTML += `👉 ${i} `
    i += ps
   }
   cont.innerHTML += ` 👉\u{1f3c1}`
   
}
else{
    window.alert('Erro o final deve ser maior que o inicio.')
   }
}

