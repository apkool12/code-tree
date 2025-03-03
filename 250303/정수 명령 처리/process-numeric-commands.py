N = int(input())
command = []
value = []

for _ in range(N):
    line = input().split()
    command.append(line[0])
    if line[0] == "push":
        value.append(int(line[1]))
    else:
        value.append(0)

stack = []
result = []

for i in range(N):
    if command[i] == "push":
        stack.append(value[i])
    elif command[i] == "pop":
        result.append(stack.pop() if stack else -1)
    elif command[i] == "size":
        result.append(len(stack))
    elif command[i] == "empty":
        result.append(1 if not stack else 0)
    elif command[i] == "top":
        result.append(stack[-1] if stack else -1)

for res in result:
    print(res)
