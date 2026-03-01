class BankAccount:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"{amount} deposited successfully")

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"{amount} withdrawn successfully")
        else:
            print("Insufficient funds")

    def get_balance(self):
        return self.balance
    
account1 = BankAccount("123456789", "Krishna", 1000)
account1.deposit(500)
print(f"Balance after deposit: {account1.get_balance()}")
account1.withdraw(200)
print(f"Balance after withdrawal: {account1.get_balance()}")

