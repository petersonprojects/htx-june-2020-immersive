

age = 25
if (age == 25):
    print(age)
name = "Snoop Dog"
if (name == "Snoop Dog"):
    print(name)
if (age <= 25):
    print(age)
if (age != 25):
    print(age)
if (age < 25):
    print(age)
    

if True: 
    print("True")
else: 
    print("False")


## Produces error

# if True: 
#     print("Answer")
#     print("True")
# else:
#     print("Answer")
#   print("False")


# if-else 

if age >= 21:
  print("You get free beer")
else:
  print("Sorry no beer for you")
  

# elif

if age >= 21:
  print("You get free beer")
elif age < 18:
  print("What are you even doing here?")
else:
  print("Sorry no beer for you")
  
  
# while 

count = 0
while count < 10:
  count += 1
  print("The count is", count)
print("Done")


answer = ''
while answer != 'when':
  answer = input('Say when: ')
  answer = answer.lower()
print("Cheese")


# while break 

while True:
  answer = input('Say when: ')
  if answer.lower() == 'when':
    break
print("Cheese")