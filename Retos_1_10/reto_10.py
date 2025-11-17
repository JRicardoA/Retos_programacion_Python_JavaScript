#Pide al usuario que ingrese una lista de números (separados por comas) y luego otro número.
#El programa debe decir cuántos números de la lista son mayores que el número dado.
numeros = input("ingresa los numeros:")
numero_comparacion= input("ingresa el numero con el que deseas compararlo:")
numeros_lista = numeros.split(",") 
cantidad = 0
for elemento in numeros_lista:
    if elemento > numero_comparacion:
        cantidad += 1
print(f"Hay {cantidad} numeros mayores que {numero_comparacion}")