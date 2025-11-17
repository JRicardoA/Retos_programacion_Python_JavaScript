#Escribe un programa que pida al usuario un número y muestre en pantalla su tabla de multiplicar del 1 al 10.
mult = (1,2,3,4,5,6,7,8,9,10)
x = input("Ingresa un numero: ")
print(f"Tabla del {x}")
for y in mult:
    print(f"{mult[y-1]} * {x} = {int(x)*int(mult[y-1])}")
#la forma mas eficiente es for y in range(1,11), en este caso queria practicar con una tupla