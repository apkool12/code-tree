n = int(input())
arr = list(map(int, input().split()))

def bubble_sort(arr):
    n = len(arr)
    for i in range(n): 
        swap = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swap = True
        if not swap:
            break
    return arr

sorted_arr = bubble_sort(arr)
print(" ".join(map(str, sorted_arr)))


