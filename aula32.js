function somar(){
    let n1 = Number(window.prompt('Digite um número'))
    let n2 = Number(window.prompt('Digite outro número'))

    let res = document.querySelector('section#res')
    res.innerHTML = `<span> A soma entre ${n1} e ${n2} é igual a ${n1+n2}</span>`
}

function subtrair(){
    let n3 = Number(window.prompt('Digite um número'))
    let n4 = Number(window.prompt('Digite outro número'))

    let res = document.querySelector('section#res')
    res.innerHTML = `<span> A subtracao entre ${n3} e ${n4} é igual a ${n3-n4}</span>`
}

function multiplicar(){
    let n5 = Number(window.prompt('Digite um número'))
    let n6 = Number(window.prompt('Digite outro número'))

    let res = document.querySelector('section#res')
    res.innerHTML = `<span> A divisao entre ${n5} e ${n6} é igual a ${n5*n6}</span>`
}

function dividir(){
    let n7 = Number(window.prompt('Digite um número'))
    let n8 = Number(window.prompt('Digite outro número'))

    let res = document.querySelector('section#res')
    res.innerHTML = `<span> A divisao entre ${n7} e ${n8} é igual a ${n7/n8}</span>`
}

function media(){
    let nome = window.prompt('Qual o seu nome?')
    let n1 = Number(window.prompt('Digite a primeira nota:'))
    let n2 = Number(window.prompt('Digite a segunda nota:'))

    med = (n1 + n2)/2

    let msg 
    if(med ){
        msg = 'Aprovado'
    }else{
        msg = 'Reprovado'
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `Olá, ${nome}! Sua média foi ${med}!`
    res.innerHTML = `<p> A mensagem que que temos é: <h1 style="color: green">${msg}</h1><p></p>`
}



