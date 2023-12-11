from time import perf_counter
import from Cronometro import Cronometro


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name

    def __enter__(self):
        self.start = perf_counter()

    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")


with Cronometro("algoritmo"):
    algoritmo(...)


#Exercício 1 Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"], após duas iterações utilizando bubble sort, como estaria este array?
    #["elefante", "arara", "javali" ,"macaco","zebra"]

#Exercício 2 Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando merge sort. Comece o passo a passo a partir da linha abaixo:
    # 7   3   5   4   6   8   2   1
    # 7 3 5 4         6 8 2 1
    # 7 3   5 4       6 8   2 1
    # 7  3  5  4     6  8   2  1
    #  37    45       68     12
    #    3457           1268
    #          1234578

from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:] # copia dos ordenados
shuffle(aleatorios) # embaralha eles

