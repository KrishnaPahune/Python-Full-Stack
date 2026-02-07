# Positional → Order matters
def power(base, exponent):
    return base ** exponent

print(power(2, 3))   # 8

# Default → Has a fallback value
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25
