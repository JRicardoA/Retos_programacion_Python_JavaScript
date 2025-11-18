#comparar un numero: GENERAR UNA LISTA DE LOS NUMEROS MAYORES QUE EL Y UNA LISTA DE LOS NUMEROS MENORES QUE EL
lista = input("Ingrese numeros separados por comas: ")
numero_a_comparar = input("Ingrese el numero a comparar: ")
lista_int = list(map(int, lista.split(",")))
numeros_mayores = []
numeros_menores = [] #menores o iguales
for item in lista_int:
    if item > int(numero_a_comparar):
        numeros_mayores.append(item)
    else:
        numeros_menores.append(item)

mayores = ", ".join(map(str,numeros_mayores))
menores = ", ".join(map(str,numeros_menores))
print(f"Los numeros mayores que {numero_a_comparar} son {mayores}. \nLos numeros menores o iguales que {numero_a_comparar} son {menores}.")
