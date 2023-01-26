
 //calculadora de suma resta y multiplicación
 
 let entrada = prompt("ingrese su nombre")
 while (entrada == "") {
    alert("no has ingresado ningún nombre!")}
    alert (entrada + ", bienvenido a la calculadora interactiva! ")

//Calculadora de suma

function sumarDosNumeros (num1, num2)
{
    let resultado = num1 + num2
    console.log(resultado);
    return resultado;
    }

sumarDosNumeros();
const primerNumero= parseInt(prompt("ingrese el primer número para sumar"));
alert("+")
const segundoNumero= parseInt(prompt("ingrese el segundo número para sumar"));

if (primerNumero) {}
else {alert ("el valor ingresado no es un número!")}
if (segundoNumero) {}
else {alert ("el valor ingresado no es un número!")}

    sumarDosNumeros(primerNumero,segundoNumero)

let resultadoDeLaSuma = sumarDosNumeros (segundoNumero,primerNumero)
console.log(resultadoDeLaSuma);
alert("el resultado de la suma es: " + resultadoDeLaSuma);


//calculadora de resta

function restarDosNumeros (num1, num2)
{
    let resultado = num1 - num2
    console.log(resultado);
    return resultado;}
    

restarDosNumeros();
const primerNumeroResta= parseInt(prompt("ingrese el primer numero para restar"));
alert("-")
const segundoNumeroResta= parseInt(prompt("ingrese el segungo numero para restar"));

if (primerNumeroResta) {}
else {alert ("el valor ingresado no es un número!")}
if (segundoNumeroResta) {}
else {alert ("el valor ingresado no es un número!")}

restarDosNumeros(primerNumeroResta,segundoNumeroResta)

let resultadoDeLaResta = restarDosNumeros (primerNumeroResta,segundoNumeroResta)
console.log(resultadoDeLaResta);
alert("el resultado de la resta es: " + resultadoDeLaResta)


//multiplicación

function multiplicarDosNumeros (num1, num2)
{
    let resultado = num1 * num2
    console.log(resultado);
    return resultado;
    }

const primerNumeroMultiplicacion= parseInt(prompt("ingrese el primer numero para multiplicar"));
alert("*")
const segundoNumeroMultiplicacion= parseInt(prompt("ingrese el segungo numero para multiplicar"));

if (primerNumeroMultiplicacion) {}
else {alert ("el valor ingresado no es un número!")}
if (segundoNumeroMultiplicacion) {}
else {alert ("el valor ingresado no es un número!")}

multiplicarDosNumeros(primerNumeroMultiplicacion,segundoNumeroMultiplicacion)

let resultadoDeLaMultiplicacion = multiplicarDosNumeros (primerNumeroMultiplicacion,segundoNumeroMultiplicacion)
console.log(resultadoDeLaMultiplicacion);
alert("el resultado de la multiplicación es: " + resultadoDeLaMultiplicacion)

//  tabla de multiplicación por 1,2,3,4 y 5

let numeroIngresado = parseInt (prompt("ingresar numero para multiplicarlo por 1,2,3,4 y 5"));

for (let i=1; i <=5; i++) {
    let resultado = numeroIngresado * i ;
    console.log(numeroIngresado + " x " + i + " = " + resultado)
    if (i ==1) alert("el número ingresado multiplicado por 1 es = " + resultado)
    if (i ==2) alert("el número ingresado multiplicado por 2 es = " + resultado)
    if (i ==3) alert("el número ingresado multiplicado por 3 es = " + resultado)
    if (i ==4) alert("el número ingresado multiplicado por 4 es = " + resultado)
    if (i ==5) alert("el número ingresado multiplciado por 5 es = " + resultado)}
 {   alert ("gracias por utilizar la calculadora interactiva!")
}
