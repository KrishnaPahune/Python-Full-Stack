import requests

response = requests.get("https://jsonplaceholder.typicode.com/users")

users = response.json()

print(users[0]["name"])
print(users[0]["email"])
print(users[0]["address"]["city"])