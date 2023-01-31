/*
Estructuras de control:
-> Permiten modificar el flujo de ejecución de las instrucciones de un programa.
-
-
-> Condicionales: if/else
Un if en programación se utiliza para evaluar una expresión condicional: si se cumple la condición (es true), ejecutará un bloque de código

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

if (condicion) {
    //bloque true
} else {
    //bloque false
}

*/

//Ejemplo #1

let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste súper bien!");
} else {
    console.log("Lo escribiste mal");
}

// Ejemplo #02

let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(`${numUsuario} es: ${typeof numUsuario}`)

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    console.log("Genial!");
} else {
    console.log("Súper mal!")
}

/*
-> Condicionales: switch
switch evalúa una expresión, comprobando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch

*/
let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("God of War");
        break;
    default:
        console.log("Opción no válida");
        break;
}

/*
-> Bucles: while
while crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúa como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while

Operador de incremento: el operador de incremento (++) incrementa (suma uno a) su operando y devuelve el valor antes o después del incremento, dependiendo de dónde se coloque el operador.

MOZILLA --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

*/
let numero = 0;

while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1
}
console.log(`FIN: ${numero}`);

/*
Juego de adivinar:
-> Math.random(): La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random


Ésta función retorna un entero aleatorio entre min (incluido) y max (excluido).

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
*/

//Juego de adivinar un número
//inicializamos la variable donde se almacena el numero aleatorio
let numeroPorAdivinar = Math.floor(Math.random() * (10 - 1) + 1);
//lo imprimimos por consola
console.log(numeroPorAdivinar);
//inicializamos la variable donde se almacena el numero ingresado por el usuario
let numeroUsuario = parseInt(prompt("Adivine número del 1 al 10"));
//inicializamos la variable encargada de contener las vidas del usuario, cuando no acierte se le descontaran vidas
let vidasUsuario = 3;
//creamos el bucle while y decimos... mientras el numero aleatorio no sea igual al numero ingresado por el usuario y mientras las vidas del usuario sean mayores a 1 pedir al usuario volver a intentar ingresando otro numero
while (numeroPorAdivinar !== numeroUsuario && vidasUsuario > 1) {
    //descontaremos 1 a 1 las vidas del usuario por cada intento fallido
    vidasUsuario--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidasUsuario));
}
//aqui creamos un if/else para mostrar segun sea la condicion si el usuario gano o perdio
if (numeroPorAdivinar === numeroUsuario) {
    console.log("GANASTE!")
} else {
    console.log("PERDISTE, el número era: " + numeroPorAdivinar);
}

/*
Juego de adivinar #2
-> en este caso es el mismo juego solo que aqui le daremos pistas al usuario para que le sea mpas facil adivinar el número
*/
let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroMaquina);
let numeroUser = parseInt("Adivine el número del 1 al 10")

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));

}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE")
} else (
    console.log("PERDISTE, el número era: " + numeroMaquina)
);

/*
Array
-> los arrays son objetos similares a una lista cuyo prototipo proporcina métodos para efectuar operaciones de recorrido y mutación. Tanto la longitud como el tipo de los elementos de un array son variables.
*/
let frutas = ["manzana", "pera", "banana"];
console.log(frutas);

/*
Conceptos claves:
length -> tamaño de array (cantidad de elementos)
indice -> comienzan en cero, es decir, el índeice del primer elemento de un array es 0

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

*/
let frutas2 = ["manzana", "pera", "banana"];
console.log(frutas);

console.log(frutas2);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

/*
Undefined:
-> las variables a las que no se le ha asginado valor o no se ha declarado en absoluto son de tipo undefined. Un método o sentencia también devuelve undefined si una variable que se está evaluando no tiene asignado un valor. Una función devuelve undefined si no se ha devuelto un valor.
*/

/*
Bucles: for
-> crea un bucle que consiste en tres expresiones opcionales, encerradas en paaréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for

*/
//Me sirve para recorrer un array imprimiendo sus elementos por ejemplo...
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

/*
Bucles: for of
-> ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: string, array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

CUIDADO:
La sintaxis de for...of es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad [Symbol.iterator].

*/
for (let fruta of frutas) {
    console.log(fruta);
}

/*
Bucles: for in
iterará sobre todas las propiedades de un objeto. Iterará sobre cualquier propiedad en el objeto que haya sifo internamente definida con su propiedad [[enumerable]] configurada como true.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of#diferencia_entre_for...of_y_for...in

*/
for (let fruta in frutas) {
    console.log(fruta);
}

/*
Functions
Una función en js es similar a un procedimiento, un conjunto de instrucciones que realiza una tarea, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna devolución obvia entre la entrada y salida.

Características:
-> El nombre de la función.
-> Una lista de parámetros de la función, entre paréntesis y separados por comas.
-> Las declaraciones de Js que definene la función, encerradas entre llaves.

*/

function saludar () {
    console.log("Bienvenido!");
}

saludar();

/*
Y en este caso...
*/

saludar();

function saludar() {
    console.log("Bienvenido!");
}

/*
Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

MOZILLA --> https://developer.mozilla.org/es/docs/Glossary/Hoisting

*/

/*
Funciones con argumentos / parámetros:
*/
function saludar(nombreUsuario) {
    console.log("Bienvenido " + nombreUsuario);
}

saludar("Nahuel");

/*
Funciones con retorno:
*/
function saludarUsuario(nombreUsuario) {
    return "bienvenido " + nombreUsuario;
}

console.log(saludarUsuario("Gonzalo"));

/*
Ejemplo sumar:
*/
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numerouno = prompt("Ingresar primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);

/*
Una característica fundamental de las funciones es que se pueden reutilizar
*/
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);