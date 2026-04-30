var agora = new Date()
var dia_sem = agora.getDay()
/*
0Domingo
1Segunda
2Terça
3Quarta 
4Quinta
5Sexta
6Sabado
*/

switch(dia_sem){
   
        case 0:
            console.log('Domingo.')
        break

        case 1:
            console.log('Segunda.')
        break

        case 2:
            console.log('Terça.')
        break

        case 3:
            console.log('Quarta.')
        break

        case 4:
            console.log('Quinta.')
        break

        case 5:
            console.log('Sexta.')
        break

        case 6:
            console.log('Sabado.')
        break

        default:
            console.log('Só Deus sabe.')
        break
}