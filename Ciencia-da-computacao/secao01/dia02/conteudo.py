# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical


from pickle import INT


def nome(name):
    for letter in name:
        print(letter)


# print(nome("murilo"))


# Escreva um programa que receba vários números naturais e calcule a soma desses valores.


def soma(list):
    result = 0
    for num in list:
        if not num.isdigit():
            print(f"Erro ao somar valores, {num} é um valor inválido")
        result = result + num
    return result


# print(soma(list))
