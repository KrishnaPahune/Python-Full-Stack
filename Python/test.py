L = [1,2,3,4,5]

#List Comprehension
squares = [n**2 for n in L]

#lambda + map
doubles = list(map(lambda n: n*2, L))

#flaten a list of lists
list_of_lists = [[1,2],[3,4],[5]]
flat_list = [item for sublist in list_of_lists for item in sublist]

print(squares)
print(doubles)
print(flat_list)

"""Output:
[1, 4, 9, 16, 25]
[2, 4, 6, 8, 10]
[1, 2, 3, 4, 5]
"""