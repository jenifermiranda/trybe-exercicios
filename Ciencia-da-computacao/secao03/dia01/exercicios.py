# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]

def tempo_max(valores_coletados):
    maximo = 0
    contador = 0
    for tempo in valores_coletados:
        if tempo == 1:
            contador += 1
        else:
            contador = 0
        if contador >= maximo:
            maximo = contador
    return maximo

# complexidade: O(n)

#___________________________________________________________________
# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

def embaralha(cartas):
    pilha1 = []
    pilha2 = []
    pilha_final = []
    for index in range(cartas):
        if index < cartas.len / 2:
            pilha1.append(cartas[index])
        else:
            pilha2.append(cartas[index])



#___________________________________________________________________
            
