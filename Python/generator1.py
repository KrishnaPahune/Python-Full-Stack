def square_numbers(n):
    for i in range(n):
        yield i ** 2

gen = square_numbers(5)

for num in gen:
    print(num)  # Output: 0, 1, 4, 9, 16