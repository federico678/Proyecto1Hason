
 //calculadora de suma resta y multiplicación
 
 let entrada = prompt("ingrese su nombre")
 while (entrada == "") {
    alert("no has ingresado ningún nombre!");
    entrada = prompt("ingrese su nombre ")}

    console.log(entrada +", bienvenido!")
    alert (entrada + ", bienvenido a la muestra de calculadora interactiva! ")
    alert(entrada + ", una vez que termines la muestra, podrás comprar la calculadora de forma muy sencilla y a precios únicos!")
//Calculadora de suma (SUMA DOS NÚMEROS)

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
console.log("el resultado de "+ primerNumero + "+" + segundoNumero + "="+ resultadoDeLaSuma);
alert("el resultado de: " + primerNumero +"+" + segundoNumero+ "=" + resultadoDeLaSuma);


//calculadora de resta (RESTA DOS NÚMEROS)

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
console.log("el resultado de " + primerNumeroResta +"-" + segundoNumeroResta + "="+ resultadoDeLaResta);
alert("el resultado de: " + primerNumeroResta +"-" + segundoNumeroResta+ "=" + resultadoDeLaResta)

//multiplicación (MULTIPLICA DOS NÚMEROS)

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
console.log("el resultado de " + primerNumeroMultiplicacion +"*" + segundoNumeroMultiplicacion + "="+ resultadoDeLaMultiplicacion);
alert("el resultado de "+ primerNumeroMultiplicacion + "*"+ segundoNumeroMultiplicacion+"=" + resultadoDeLaMultiplicacion)

//  tabla de multiplicación por 1,2,3,4 y 5 (MULTIPLICA 1 NÚMERO POR 1,2,3,4 Y 5)

let numeroIngresado = parseInt (prompt("ingresar numero para multiplicarlo por 1,2,3,4 y 5"));

for (let i=1; i <=5; i++) {
    let resultado = numeroIngresado * i ;
    console.log(numeroIngresado + " x " + i + " = " + resultado)
    if (i ==1) alert( numeroIngresado + " multiplicado por 1 es = " + resultado)
    else if (i ==2) alert( numeroIngresado + " multiplicado por 2 es = " + resultado)
    else if (i ==3) alert( numeroIngresado + " multiplicado por 3 es = " + resultado)
    else if (i ==4) alert( numeroIngresado + " multiplicado por 4 es = " + resultado)
    else if (i ==5) alert( numeroIngresado + " multiplciado por 5 es = " + resultado)}

//calcular iva: (CALCULA EL IVA DE UN PRECIO QUE SE INGRESE)

function iva (precio,iva,cien){
    let resultado = (precio*iva)/cien;
    return resultado;}
   

const primerNro = parseInt(prompt("introduce el precio sobre el que se calculará el iva"))
const segundoNro= parseInt(prompt("ingrese el porcentaje del iva"))
const tercerNro= 100


iva(primerNro,segundoNro,tercerNro)
let resultadoIva1 = iva (primerNro,segundoNro,tercerNro)
    
alert("el "+segundoNro +" %(iva) de " + primerNro + " es " + resultadoIva1);
console.log("el iva del "+ segundoNro +"% de " + primerNro + " es " + resultadoIva1)


//Calcular iva + precio (CALCULA IVA Y SE LO SUMA AL PRECIO SOBRE EL CUAL SE CALCULO EL IVA)

function iva1 (precio,iva,cien){
    let resultado = ((precio*iva)/cien)+precio ;
    return resultado
}

const firstNro = parseInt(prompt("introduce un precio para calcular el iva del 21%,(el resultado incluirá el precio más el iva)"))
const secondNro= 21
const thirdNro= 100

iva1(firstNro,secondNro,thirdNro)
let resultadoIva2 = iva1 (firstNro,secondNro,thirdNro)
    
alert("El precio con el iva del 21% incluído es: " + resultadoIva2);
console.log("el iva con el precio incluído es : " + resultadoIva2)

{   alert ("gracias por utilizar la calculadora interactiva!")
}


//HISTORIAL DE RESULTADOS DE LOS CALCULOS REALIZADOS:

const resultados = ["suma: "+resultadoDeLaSuma, "resta: "+resultadoDeLaResta,"multiplicación: "+resultadoDeLaMultiplicacion,"iva: "+ resultadoIva1,"iva con el precio incluído: "+ resultadoIva2]

console.log("Todos los resultados: "+ resultados)


//la calculadora se puede adquirir como producto, para ello se podrá comprar, añadiendola al carrito!


const mostrarCarrito =() => {
    let mensaje = `carrito:`;
    Carrito.forEach((el, index) => {
        mensaje+= `
        ${index+1} -${el.nombre} $${el.precio} ${el.descripcion};`});
    alert(mensaje);

};

const mostrarCatalogo = () => {
    let mensaje = `Productos:
    seleccione el codigo para agregar al carrito `;
    Productos.forEach((el,index) => {
        mensaje += `
        ${index+1}- ${el.nombre} $${el.precio} ${el.descripcion}
        `;
}); 
let opcion1 = parseInt(prompt(mensaje));
let cantidad = parseInt(prompt("cantidad?"));
for (let i = 0; i < cantidad; i++) {
Carrito.push(Productos[opcion1 - 1]);
}
};

const mostrarTotal = () =>{
    let total = 0;
    Carrito.forEach((el)=>{
        total += el.precio;
    });
    alert("su total por ahora es: "+ total);
};

const Carrito= [];

class Producto {
    constructor (nombre, precio,descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion=descripcion;
    }
}

const calculadoraComun =new Producto ("calculadora común: ", 15000," es ideal para niños! suma,resta y multiplica");
const calculadoraOperativa= new Producto ("calculadora operativa ",22000," es ideal para comerciantes, suma resta multiplica, divide y calcula el iva!" );
const calculadoraCientifica=new Producto ("calculadora científica ",43000," permite realizar operaciones de todo tipo!");

const  Productos =[calculadoraComun,calculadoraOperativa,calculadoraCientifica];

let opcion=parseInt(
    prompt(`hola, bienvenido a nuestro sector comercial!, que desea hacer? 
                                1- ver catalogo  
                                2- ver carrito
                                3- ver total
                                4- salir
`)
);

while (opcion != 4) {
    switch(opcion) {
    case 1:
        mostrarCatalogo();
        break;
    case 2: 
        mostrarCarrito();
        break;
    case 3:
        mostrarTotal();
        break;
        default:
        break;
    }

opcion= parseInt(
    prompt(`hola,bienvenido!, que desea hacer?
                                1- ver catalogo
                                2- ver carrito
                                3- ver total
                                4- salir

    `)
)

if (opcion == 4){
    alert("hasta luego!");
}
}


