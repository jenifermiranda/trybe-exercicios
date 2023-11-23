import math


def maior(a, b):
    if a > b:
        return a
    else:
        return b


# print(maior(3, 8))

list = [1, 2, 3, 4]


def media(lista):
    result = 0
    for num in lista:
        result = num + result
        return result / len(lista)


# print(media(list))


def square(n):
    if n > 1:
        for index in range(n):
            print(n * "*")


# print(square(3))

nomes = ["ana", "lucas", "mariana"]


def maior_nome(nomes):
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


# print(maior_nome(nomes))


def cobertura(metro):
    litros = metro / 3
    lata = math.ceil(litros / 18)
    preco = lata * 80
    total = (lata, preco)
    return total


# print(cobertura(250))


def qual_triangulo(a, b, c):
    if a + b < c or a + c < b or b + c < a:
        return "não é triângulo"
    elif a == b == c:
        return "triângulo equilátero"
    elif a == b != c or a == c != b or b == c != a:
        return "triângulo isósceles"
    else:
        return "triangulo escaleno"


# print(qual_triangulo(2, 1, 3))
