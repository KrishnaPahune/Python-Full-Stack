text = 'mississippi'
d ={}

for char in text:
    if(char in d):
        d[char] += 1
    else:
        d[char] = 1
for char in d:
    print(char,'-',d[char])

for key, value in d.items():
    print(key,'-',value)