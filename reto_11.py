#Escribe un programa que reciba una lista de números (separados por comas) y luego: Muestre todos los números pares y Muestre todos los números impares
x = input("Escribe una lista de numeros separados por comas: ")
lista=x.split(",")
lista_pares = []
lista_impares= []
for item in lista:
    if int(item) % 2 == 0:
        lista_pares.append(int(item))
    else:
        lista_impares.append(int(item))
pares = ",".join(map(str, lista_pares))
impares = ",".join(map(str, lista_impares))
print(f"Los numeros pares son {pares}")
print(f"Los numeros impares son {impares}")