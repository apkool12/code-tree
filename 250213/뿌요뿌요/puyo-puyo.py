n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * n for _ in range(n)]
def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n

def can_go(x, y):
    if not in_range(x, y):
        return False
    if visited[x][y]:
        return False
    return True

def dfs(x, y):
    global block_cnt

    dxs, dys = [-1, 1, 0, 0], [0, 0, -1, 1]

    for dx, dy in zip(dxs, dys):
        nx, ny = x + dx, y + dy

        if can_go(nx, ny) and grid[nx][ny] == grid[x][y]:
            visited[nx][ny] = 1
            block_cnt += 1
            dfs(nx, ny)

boom = 0
max_block_cnt = 0
for i in range(n):
    for j in range(n):       
        block_cnt = 1

        if can_go(i, j):
            visited[i][j] = 1
            dfs(i, j)
        if block_cnt >= 4:
            boom += 1
        if max_block_cnt < block_cnt:
            max_block_cnt = block_cnt

print(boom, max_block_cnt)