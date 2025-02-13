n = int(input())
people = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * n for _ in range(n)]
cnt = 0

residents = []

def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n

def can_go(x, y):
    if not in_range(x, y):
        return False
    
    if visited[x][y] or people[x][y] == 0:
        return False

    return True

def dfs(x, y):
    global cnt
    dxs, dys = [-1, 1, 0, 0], [0, 0, -1, 1]

    for dx, dy in zip(dxs, dys):
        nx, ny = x + dx, y + dy

        if can_go(nx, ny):
            visited[nx][ny] = 1
            cnt += 1
            dfs(nx, ny)

for i in range(n):
    for j in range(n):
        if can_go(i, j):
            visited[i][j] = 1
            cnt = 1    
            dfs(i, j)
            residents.append(cnt)

print(len(residents))

residents.sort()
for r in residents:
    print(r)