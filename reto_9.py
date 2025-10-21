#Escribe un programa que reciba una lista de números (ingresados por el usuario y separados por comas), y calcule la suma de todos los números pares de esa lista.
x = input("Ingresa numeros separados por comas:")
numeros = x.split(",")
numeros_pares = []
for element in numeros:
    if int(element)%2 == 0:
        numeros_pares.append(int(element))
print(numeros_pares)
print(sum(numeros_pares))