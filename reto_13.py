#Contar cuántas veces aparece un valor en una lista
lista = input("Ingrese una lista de numeros separados por comas: ")
numero_a_buscar = input("Ingrese el numero que quiere buscar: ")
lista_2 = lista.split(",")
cantidad = 0
for item in lista:
    if item == numero_a_buscar:
        cantidad += 1
print(f"El numero {numero_a_buscar} aparece {cantidad} veces")