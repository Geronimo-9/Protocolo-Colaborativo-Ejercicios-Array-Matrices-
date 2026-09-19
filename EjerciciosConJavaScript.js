//Arreglos co Javascript

// Actividad 1: Declaración, creación e inicialización
let numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 10) + 1);
}

console.log("\nActividad 1 - Arreglo de 10 enteros:");

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log(`Posición [${i}] = ${numerosAleatorios[i]}`);
}

// Actividad 2: Recorrido con for clásico
console.log("\nActividad 2 - Recorrido con for:");

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log(numerosAleatorios[i]);
}

// Actividad 2: Recorrido equivalente a for-each
console.log("\nActividad 2 - Recorrido con for-of:");

for (const numero of numerosAleatorios) {
    console.log(numero);
}

// Actividad 3: Cambiar valores impares por cero
console.log("\nActividad 3 - Valores impares convertidos a cero:");

let numerosImparesCero = [...numerosAleatorios];

for (let i = 0; i < numerosImparesCero.length; i++) {
    if (numerosImparesCero[i] % 2 !== 0) {
        numerosImparesCero[i] = 0;
    }
}

for (const numero of numerosImparesCero) {
    console.log(numero);
}

// Actividad 3: Multiplicar valores por su índice
console.log("\nActividad 3 - Valores multiplicados por su índice:");

let numerosMultiplicados = [...numerosAleatorios];

for (let i = 0; i < numerosMultiplicados.length; i++) {
    numerosMultiplicados[i] *= i;
    console.log(`Índice ${i} = ${numerosMultiplicados[i]}`);
}

// Actividad 4: Búsqueda lineal
console.log("\nActividad 4 - Búsqueda lineal:");

const elementoObjetivo = 4;
let encontrado = false;

for (let i = 0; i < numerosAleatorios.length; i++) {
    if (numerosAleatorios[i] === elementoObjetivo) {
        console.log(
            `El valor ${elementoObjetivo} fue encontrado ` +
            `en la posición ${i}`
        );

        encontrado = true;
    }
}

if (!encontrado) {
    console.log(
        `El valor ${elementoObjetivo} no se encuentra en el arreglo.`
    );
}

// Actividad 5: Características de JavaScript
console.log("\nActividad 5 - Características de JavaScript:");
console.log("JavaScript utiliza tipado dinámico.");
console.log("Las variables no necesitan declarar su tipo previamente.");
console.log("Los arrays tienen tamaño dinámico.");
console.log("La indexación comienza en 0.");



//Matrices con Javascript



// Actividad 1: Matriz 3x3
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("\nActividad 1 - Matriz 3x3:");

for (const fila of matriz) {
    console.log(fila.join("\t"));
}

// Actividad 2: Recorrido por columnas
console.log("\nActividad 2 - Recorrido por columnas:");

for (let j = 0; j < matriz[0].length; j++) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(
            `Columna ${j}, fila ${i} = ${matriz[i][j]}`
        );
    }
}

// Actividad 3: Sumar elementos
console.log("\nActividad 3 - Suma de los elementos:");

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

console.log(`Suma total = ${suma}`);

// Intercambiar primera fila con última fila
console.log("\nIntercambio de primera y última fila:");

let filaTemporal = matriz[0];
matriz[0] = matriz[matriz.length - 1];
matriz[matriz.length - 1] = filaTemporal;

for (const fila of matriz) {
    console.log(fila.join("\t"));
}