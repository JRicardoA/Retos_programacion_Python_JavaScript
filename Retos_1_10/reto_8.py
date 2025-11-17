#Escribe un programa que pida al usuario una lista de números separados por comas y muestre la suma de todos los elementos.
x = input("ingresa numeros separados por comas: ")
numeros = x.split(",")
numeros2 = map(int, numeros)
suma = sum(numeros2)
print(suma)
#chatgpt usa strip en python y trim en js