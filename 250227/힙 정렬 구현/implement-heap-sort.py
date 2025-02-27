def heapify(arr, n, i):
    largest = i
    left = 2 * i
    right = 2 * i + 1

    if left <= n and arr[left] > arr[largest]:
        largest = left

    if right <= n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr) - 1

    for i in range(n // 2, 0, -1):
        heapify(arr, n, i)

    for i in range(n, 1, -1):
        arr[1], arr[i] = arr[i], arr[1]
        heapify(arr, i - 1, 1)

n = int(input())
arr = [0] + list(map(int, input().split()))

heap_sort(arr)

print(*arr[1:])
