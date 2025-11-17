#Escribe un programa que pida al usuario una cadena de texto y cuente cuántas vocales (a, e, i, o, u) contiene.
frase = input("ingresa una cadena de texto: ")
palabra = tuple(frase)
vocales = 0
for letra in palabra:
    if letra == 'a':
        vocales = vocales + 1
    if letra == 'e':
        vocales = vocales + 1
    if letra == 'i':
        vocales = vocales + 1
    if letra == 'o':
        vocales = vocales + 1
    if letra == 'u':
        vocales = vocales + 1

print(f"Esta cadena de texto tiene {vocales} vocales")
# si se utiliza for, nos da la cantidad de vocales exacta, si no se utiliza for nos arroja cuantas de las 5 vocales fueron usadas
# este ejercicio solo considero minusculas

#chatgpt utilizo
#vocales = "aeiouAEIOU"
#contador = sum(1 for letra in texto if letra in vocales) 
#y en js uso algo parecido

