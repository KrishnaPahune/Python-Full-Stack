import sys

square_list = []

for i in range(1000000):
    square_list.append(i**2)

def generate_squares(n):
    for i in range(n):
        yield i**2
    
generator = generate_squares(1000000)

print("Memory used by list:", sys.getsizeof(square_list), "bytes")
print("Memory used by generator:", sys.getsizeof(generator), "bytes")