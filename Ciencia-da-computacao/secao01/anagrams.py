def is_anagram(first_string, second_string):
    def merge_sort(string, start=0, end=None):
        if end is None:
            end = len(string)
        if (end - start) > 1:  # se não reduzi o suficiente, continua
            mid = (start + end) // 2  # encontrando o meio
            merge_sort(string, start, mid)  # dividindo as listas
            merge_sort(string, mid, end)
            merge(string, start, mid, end)  # unindo as listas

    def merge(string, start, mid, end):
        left = string[start:mid]  # indexando a lista da esquerda
        right = string[mid:end]  # indexando a lista da direita

        left_index, right_index = 0, 0  # as duas listas começarão do início

        for general_index in range(
            start, end
        ):  # percorrer sobre a lista inteira como se fosse uma
            if left_index >= len(
                left
            ):  # se os elementos da esquerda acabaram, preenche o restante com a lista da direita
                string[general_index] = right[right_index]
                right_index = right_index + 1
            elif right_index >= len(
                right
            ):  # se os elementos da direita acabaram, preenche o restante com a lista da esquerda
                string[general_index] = left[left_index]
                left_index = left_index + 1
            elif (
                left[left_index] < right[right_index]
            ):  # se o elemento do topo da esquerda for menor que o da direita, ele será o escolhido
                string[general_index] = left[left_index]
                left_index = left_index + 1
            else:
                string[general_index] = right[
                    right_index
                ]  # caso o da direita seja menor, ele será o escolhido
                right_index = right_index + 1

    if merge_sort(first_string, start=0, end=None) == merge_sort(
        second_string, start=0, end=None
    ):
        return (
            merge_sort(first_string, start=0, end=None),
            merge_sort(second_string, start=0, end=None),
            True,
        )
