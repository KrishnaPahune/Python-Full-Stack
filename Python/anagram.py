t1 = 'listen'
t2 = 'silent'
if(len(t1) == len(t2)):
    l1 = list(t1)
    l1.sort()
    print(l1)
    l2 = list(t2)
    l2.sort()
    print(l2)
    if l1 == l2:
        print('anagrams')
    else:
        print('not anagrams')
else:
    print('not anagrams')
