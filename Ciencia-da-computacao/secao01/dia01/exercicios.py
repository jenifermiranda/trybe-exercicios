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

nums = [1, 2, 3, 4]


def containsDuplicate(nums):
    first_number = nums[0]
    is_true = 0
    for num in nums:
        if num == first_number:
            is_true = is_true + 1
    if is_true > 1:
        return True
    else:
        return False


# print(nums[0])
# print(containsDuplicate(nums))

# Input: nums = [1,2,3,1]
# Output: true

# Input: nums = [1,2,3,4]
# Output: false

# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

s = ["a", "a", "b", "b", "a"]


def alternatingCharacters(s):
    counter = 0

    for index in range(1, len(s)):
        if s[index] != s[index - 1]:
            counter += 1
    return counter


print(alternatingCharacters(s))
