name = "Mohandas Karamchand Gandhi"
words = name.split(" ")
if(len(words) == 3):
    print(words)
    first_name = words[0]
    middle_name = words[1]
    last_name = words[2]

    initials = first_name[0] + '.' + ' ' +  middle_name[0] + '.' + ' ' + last_name

    print(initials)
else:
    print('name must have 3 words')