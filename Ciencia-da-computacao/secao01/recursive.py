def is_palindrome_recursive(word, low_index, high_index):
    if len(word) == 1:
        return word
    if low_index < high_index:
        partition_index = partition(word, low_index, high_index)
        is_palindrome_recursive(word, low_index, partition_index - 1)
        is_palindrome_recursive(word, partition_index + 1, high_index)


def partition(word, low_index, high_index):
    i = low_index - 1
    pivot = word[high_index]

    for j in range(low_index, high_index):
        if word[j] <= pivot:
            i = i + 1
            word[i], word[j] = word[j], word[i]
    word[i + 1], word[high_index] = word[high_index], word[i + 1]

    return i + 1
