

count = 0
input_string = input("How high should we count? ")
try:
    MAX = int(input_string)
    while (count < MAX):
        print(count)
        count += 1
except ValueError:
    print("Please run the program again and type a number!")

# Error Handling

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

# Catching all errors

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except:
        print("Oops!  That was no valid number.  Try again...")

# Advanced Try/Except

try:
    do_something()
except Error1:
    failure1()
except Error2:
    failure2()
else:
    only_execute_when_successful()
finally:
    always_execute()
