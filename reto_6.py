#Escribe un programa que pida al usuario una serie de números (separados por comas) y luego muestre:
#El número mayor.
#El número menor.
a = input("ingresa 1 numero (1 de 5): ")
b = input("ingresa 1 numero (2 de 5): ")
c = input("ingresa 1 numero (3 de 5): ")
d = input("ingresa 1 numero (4 de 5): ")
e = input("ingresa 1 numero (5 de 5): ")
y = [int(a),int(b),int(c),int(d),int(e)] #parecia ocurrir un error si no se declaraban como int
print(f"el numero menor es {min(y)} y el numero mayor es {max(y)}")

# numeros = [int(num.strip()) for num in entrada.split(",")]