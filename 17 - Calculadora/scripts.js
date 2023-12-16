function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1+numero2);

}

function resta(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1-numero2);

}
function multiplicacion(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1*numero2);

}
function division(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1/numero2);

}

function raiz(){
    let numero2 = document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero2));

}

function potencia(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1,numero2));

}

function absoluto(){
    let numero2 = document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero2));

}

function aleatorio(){
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    resultado = Math.floor(Math.random()*(maximo-minimo)+minimo)
    mostrarResultado(resultado);

}

function redondeo(){
    let numero2 = document.getElementById("resultado").value;
    mostrarResultado(Math.round(numero2));

}

function piso(){
    let numero2 = document.getElementById("resultado").value;
    mostrarResultado(Math.floor(numero2));

}

function techo(){
    let numero2 = document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(numero2));

}