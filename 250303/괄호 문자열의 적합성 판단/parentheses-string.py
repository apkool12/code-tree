str = input()

def valid(str):
    stack = []
    
    for char in str:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if not stack:
                return "No"
            stack.pop()

    return "Yes" if not stack else "No" 

print(valid(str))
