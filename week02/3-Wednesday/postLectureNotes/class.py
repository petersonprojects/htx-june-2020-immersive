

# while True:
#     try:
        
#         number = int(input('enter a number  '))

#         mult = 2 * number

#         print(mult)
        
#         # if True 
#         #     print("I'm here")
#         break
#     except ValueError:
#         print("Please enter a valid number")
#     except SyntaxError:
#         print('Error in program, please try later.')
#     else:
#         print("this is a default error")
#     finally:
#         print("always execute") 

class Hero():
    pass

class Goblin(): 
    pass


hero = Hero()

print(isinstance(hero, (Hero, Goblin)))
        
        
    
