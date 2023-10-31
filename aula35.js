function calculo(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    document.querySelector('#result').innerHTML = `A soma de <mark>${a} + ${b}</mark> dividido por
    ${c} é igual a: ${(a+b/c)}`
}