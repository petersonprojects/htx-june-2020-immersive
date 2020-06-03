

# ###################### Strings ######################

# print("I am a string.")

# print('I am a string too.')

# print('I\'m a string and I have to escape my single quote.')

# print("I'm a string and I have a single quote.")



# print("""
# I am a string
# and I can span
# multiple lines!
# """)

# ####################### Concatentating Strings ###################### 

# print('abc' + 'def')

# # Escape Characters

# print('I am one line.\nI am another line')
# print('I am one line.\bI went back one space')
# print('I am one line.\tI horizontal spacing')
# print('I am one line.\nI new line')
# print('I am one line.\n\vI new line with vertical spacing')

# ####################### Integers and Floats ######################

# print(5) # integer 
# print(5.6) # float
# # mixed type will be converted to a float
# print(8 +  1.0) # result 9.0
# print(8.0 / 3) # you get 2.666666

# # Calculating with Python

# print(20 + 3650)

# print(8 * 3.57)

# print(5 + 30 * 20)

# # Use parentheses to control the order of operations

# print(((5 + 30) * 20) / 10)

# print(5 + 30 * 20 / 10)


# ####################### More Arithmetic ######################

# print(5    //    2 )          #    division    w/o    decimal    
# print(5    %    2 )          #    modulus/remainder    
# print(5    **    3 )          #    exponentiation

# f_name = "Micah"
# l_name = "Peterson"

# greeting = "Hello {} {}".format(f_name, l_name)

# print(greeting)

# greeting = f'Hello {f_name} {l_name}'

# print(isinstance(5, str))

# print(greeting)

# # name = input("Enter your name >>> ")

# # print(f'Hello {name}, how are you doing?')

# num = input("Enter a total bill amount >>> ")

# num_int = float(num)

# result = num_int * 0.0825
# #casting
# print(result)

# #73.0

#82

#2
name_of_user = input(f"What is your name? >>> ")

length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input(f"What is your friend's name? ")
    greeting = f'Hello {name_of_user}, it is very nice to meet you and your friend {name_of_friend}!'
    print(greeting)
else:
    print("OK, I'll ask again some other time.")