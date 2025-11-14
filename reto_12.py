#Escribe un programa que reciba una lista de números (separados por comas) y luego: Muestre el numero mayor, el menor y el promedio
lista = input("Escriba numeros separados por comas:")
numeros_1 = lista.split(",")
numeros_2 = list(map(int, numeros_1))
suma = sum(numeros_2)
cant_item = len(numeros_2)
prom = suma/cant_item
min=min(numeros_2)
max=max(numeros_2)
print(f"el numero mayor de la lista es {max}, el numero menor de la lista es {min},  y el promedio de los numeros de la lista es {prom}")