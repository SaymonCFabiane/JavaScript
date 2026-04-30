function calcular(){
    var n1 = Number(window.document.querySelector('input#n1').value)
    var res = window.document.querySelector('div#res')
    res.innerHTML = ''

    var i = 1
    while (i <= 10){
        res.innerHTML += `${n1} x ${i} = ${n1 * i} <br>`
        i++
    }
}