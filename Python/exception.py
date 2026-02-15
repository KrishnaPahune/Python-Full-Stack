def login_user(email, password):
    try:
        if not email or not password:
            raise ValueError("Email and password are required.")
        
        if "@" not in email:
            raise ValueError("Invalid email format.")
        
        stored_password = "admin123"

        if password != stored_password:
            raise PermissionError("Incorrect password.")
    except ValueError as ve:
        print(f"Input Error: {ve}")
    except PermissionError as pe:
        print(f"Authentication Error: {pe}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    else:
        print("Login successful!")
    finally:
        print("Login attempt completed.")
# Test cases
login_user("krishna@gmail.com", "wrongpass")
login_user("krishnagmail.com", "admin123")
login_user("krishna@gmail.com", "admin123")

    