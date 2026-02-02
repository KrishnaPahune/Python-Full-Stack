import string
char = 0
words = 0
lines = 0

String = """hi hello how 
are you
"""

for ch in String:
    char += 1
    if ch == ' ':
        words += 1
    elif ch == '\n':
        lines += 1
        words += 2

print(f'character count = {char}')
print(f'word count = {words}')

if String.endswith('\n'):
    print(f'line count = {lines + 1 - 1}')

else:        
    print(f'line count = {lines + 1}')

