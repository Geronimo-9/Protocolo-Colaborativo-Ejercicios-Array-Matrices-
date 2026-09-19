import random

#Arreglo con Python

# Actividad 1: Declaración, creación e inicialización
numeros_aleatorios = []

for i in range(10):
    numeros_aleatorios.append(random.randint(1, 10))

print("\nActividad 1 - Arreglo de 10 enteros:")
for i in range(len(numeros_aleatorios)):
    print(f"Posición [{i}] = {numeros_aleatorios[i]}")

# Actividad 2: Recorrido con for clásico
print("\nActividad 2 - Recorrido con for:")

for i in range(len(numeros_aleatorios)):
    print(numeros_aleatorios[i])

# Actividad 2: Recorrido equivalente a for-each
print("\nActividad 2 - Recorrido con for-each:")

for numero in numeros_aleatorios:
    print(numero)

# Actividad 3: Cambiar valores impares por cero
print("\nActividad 3 - Valores impares convertidos a cero:")

numeros_impares_cero = numeros_aleatorios.copy()

for i in range(len(numeros_impares_cero)):
    if numeros_impares_cero[i] % 2 != 0:
        numeros_impares_cero[i] = 0

for numero in numeros_impares_cero:
    print(numero)

# Actividad 3: Multiplicar valores por su índice
print("\nActividad 3 - Valores multiplicados por su índice:")

numeros_multiplicados = numeros_aleatorios.copy()

for i in range(len(numeros_multiplicados)):
    numeros_multiplicados[i] *= i
    print(f"Índice {i} = {numeros_multiplicados[i]}")

# Actividad 4: Búsqueda lineal
print("\nActividad 4 - Búsqueda lineal:")

elemento_objetivo = 4
encontrado = False

for i in range(len(numeros_aleatorios)):
    if numeros_aleatorios[i] == elemento_objetivo:
        print(
            f"El valor {elemento_objetivo} "
            f"fue encontrado en la posición {i}"
        )
        encontrado = True

if not encontrado:
    print(
        f"El valor {elemento_objetivo} "
        "no se encuentra en el arreglo."
    )

# Actividad 5: Características de Python
print("\nActividad 5 - Características de Python:")
print("Python utiliza tipado dinámico.")
print("Las variables no necesitan declarar su tipo previamente.")
print("Las listas tienen tamaño dinámico.")
print("La indexación comienza en 0.")




#Matrices con Python


# Actividad 1: Matriz 3x3
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("\nActividad 1 - Matriz 3x3:")

for fila in matriz:
    print(*fila)

# Actividad 2: Recorrido por columnas
print("\nActividad 2 - Recorrido por columnas:")

for j in range(len(matriz[0])):
    for i in range(len(matriz)):
        print(
            f"Columna {j}, fila {i} = {matriz[i][j]}"
        )

# Actividad 3: Sumar elementos
print("\nActividad 3 - Suma de los elementos:")

suma = 0

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        suma += matriz[i][j]

print(f"Suma total = {suma}")

# Intercambiar primera fila con última fila
print("\nIntercambio de primera y última fila:")

matriz[0], matriz[-1] = matriz[-1], matriz[0]

for fila in matriz:
    print(*fila)