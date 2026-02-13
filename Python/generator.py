def demo():
    print("Start")
    yield 1
    print("Continue")
    yield 2
    print("End")

gen = demo()
print(next(gen))  # Output: Start \n 1
print(next(gen))  # Output: Continue \n 2