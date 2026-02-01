import string

printable_characters = string.printable
print("Printable characters in Python:")
print(printable_characters)
# Output the length of printable characters
print(f"Total number of printable characters: {len(printable_characters)}")

ascii_letters = string.ascii_letters
print("\nASCII letters in Python:")
print(ascii_letters)

ascii_lowercase = string.ascii_lowercase
print("\nASCII lowercase letters in Python:")
print(ascii_lowercase)

ascii_uppercase = string.ascii_uppercase
print("\nASCII uppercase letters in Python:")  
print(ascii_uppercase)

digits = string.digits
print("\nDigits in Python:")  
print(digits)

hexdigits = string.hexdigits
print("\nHexadecimal digits in Python:")
print(hexdigits)

octdigits = string.octdigits
print("\nOctal digits in Python:")
print(octdigits)

punctuation = string.punctuation
print("\nPunctuation characters in Python:")
print(punctuation)

whitespace = string.whitespace
print("\nWhitespace characters in Python:")
print(repr(whitespace))  # Using repr to make whitespace visible