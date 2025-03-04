from collections import deque

def josephus(n, k):
    q = deque(range(1, n + 1))
    result = []

    while len(q) > 1:
        for _ in range(k - 1):
            q.append(q.popleft())
        result.append(q.popleft()) 

    result.append(q.pop())
    return result

N, K = map(int, input().split())
answer = josephus(N, K)

print(*answer)
