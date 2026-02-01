# String Methods Examples

text = "Hello World"

# Case conversion
print(text.lower())        # hello world
print(text.upper())        # HELLO WORLD
print(text.capitalize())   # Hello world
print(text.title())        # Hello World
print(text.swapcase())     # hELLO wORLD

# Search and replace
print(text.find("World"))           # 6
print(text.replace("World", "Python"))  # Hello Python
print(text.startswith("Hello"))     # True
print(text.endswith("World"))       # True
print(text.count("l"))              # 3

# Strip whitespace
text_spaces = "  Hello  "
print(text_spaces.strip())          # Hello
print(text_spaces.lstrip())         # Hello  
print(text_spaces.rstrip())         # "  Hello"

# Split and join
words = text.split()                # ['Hello', 'World']
print(" - ".join(words))            # Hello - World

# Check string content
print(text.isalpha())               # False (has space)
print("123".isdigit())              # True
print("Hello123".isalnum())         # True
print("   ".isspace())              # True

# Index
print(text.index("o"))              # 4
