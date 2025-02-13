import sys
sys.setrecursionlimit(2500)

n, m = map(int, input().split())
houses = [list(map(int, input().split())) for _ in range(n)]

max_k = max(max(houses))

def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < m

def can_go(x, y, k):
    if not in_range(x, y):
        return False
    
    if houses[x][y] <= k or visited[x][y]:
        return False 

    return True

def dfs(x, y, k):
    dxs, dys = [-1, 1, 0, 0], [0, 0, -1, 1]

    for dx, dy in zip(dxs, dys):
        nx, ny = x + dx, y + dy

        if can_go(nx, ny, k):
            visited[nx][ny] = 1
            dfs(nx, ny, k)


max_area = 0
ans_k = 1
for k in range(1, max_k + 1):
    num_of_area = 0
    visited = [[0] * m for _ in range(n)]
    for i in range(n):
        for j in range(m):
            if can_go(i, j, k):
                visited[i][j] = 1
                num_of_area += 1
                dfs(i, j, k)
				
                if max_area < num_of_area:
                    max_area, ans_k = num_of_area, k


print(ans_k, max_area)