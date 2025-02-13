n, m = map(int, input().split())  

graph = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

visited = [False for _ in range(n + 1)]

def dfs(v):
    global cnt
    for i in graph[v]:
        if not visited[i]:
            if i != 1:
                cnt += 1
            visited[i] = True
            dfs(i)

cnt = 0
dfs(1)
print(cnt)