
# Example 1
day1 = "Sunday"
day2 = "Monday"
day3 = "Tuesday"
day4 = "Wednesday"
day5 = "Thursday"
day6 = "Friday"
day7 = "Saturday"


days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday']

# Example 2

myList = []

animals = ["horse", "chicken", "goat"]
daysofweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
animals[0]  # would give you “horse”
animals[1]  # would return “chicken”
daysofweek[2]  # would return “Wednesday”
animals[0] = "cow"

# len()

numbers = [1, 2, 3]
len(numbers)

# Modifying a list

myList[1, 2, 3, 4]
myList[0] = 23  # modifies list item

# append()

todos = ["pet the cat", "go to work", "shop for groceries",
         "go home", "feed the cat"]
todos.append("binge watch a show")
todos.append("go to sleep")
count = 0
while count < len(todos):
    print(f"{count}: {todos[count]}")
    count += 1


# s.append(x)

numbers = [1, 2, 3]
numbers.append(4)
numbers

# concatenating lists

todos = ["pet the cat", "go to work", "shop for groceries",
         "go home", "feed the cat"]
todos = todos + ["binge watch a show", "go to sleep"]
count = 0
while count < len(todos):
    print(f"{count}: {todos[count]}")
    count += 1

# Deleting items from a list

todos = ["pet the cat", "go to work",
         "shop for groceries", "go home", "feed the cat"]
del todos[0]  # Remove the first one
print(todos)
del todos[1:3]  # Remove items at index 1 up but not including index 3
print(todos)

# List Slicing

numbers = [1, 2, 3, 4, 5]
numbers[0:2]   # [1, 2]
numbers[4:5]   # [5]
numbers[3:5]   # [4, 5]
numbers[2:5]   # [3, 4, 5]
numbers[3:]    # [4,5]
new_number = [4:5]

# List methods

numbers = [1, 2, 3, 4, 5]
numbers.insert(3, 6)
new_num_list = numbers[0:2]
numbers.insert(3, new_num_list)
numbers.pop()  # removes last item from list
numbers.index(4)  # returns index value of 4
numbers.index('hello')  # return index o

numbers.sort()  # numbers is sorted
newNum = num.copy()

# Multi-Dimensional Lists

x = [[2, 6], [6, 2], [8, 2], [5, 12]]
print(x[2])
print(x[2][1])
y = [[5, 2],
     [6, 2],
     [3, 1],
     [12, 6]
     ]

# Multi-Dimensional Lists

a = [[2, 4, 6, 8],
     [1, 3, 5, 7],
     [8, 6, 4, 2],
     [7, 5, 3, 1]]
i = 0
j = 0
while i < len(a):
    while j < len(a[i]):
        print(f"{a[i][j]}", end=" ")
        j += 1
    print()
    j = 0
    i += 1

# Strings

my_string = 'Hello'
my_string[0]
'H'

len(my_string)
5

my_string[1:4]
'ell'

5

my_string[:3]

# Looping through a string with while

alphabet = "abcdefghijklmnopqrstuvwxyz"
index = 0
while index < len(alphabet):
    print(alphabet[index])
    index += 1

# Convert a string to a list

alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet[0] = "4"  # wont' work.

# Loop through the characters of a String

alphabet = "abcdefghijklmnopqrstuvwxyz"
index = 0
while index < len(alphabet):
    print(alphabet[index])
    index += 1

# Convert a string to a list

alphabet = "abcdefghijklmnopqrstuvwxyz"
alphalist = list(alphabet)
alphalist[0] = "4"
print(alphalist)
# This allows you to make whatever modifications you choose


# Converst a list into a string

alphabet = "abcdefghijklmnopqrstuvwxyz"
alphalist = list(alphabet)
alphalist[0] = "4"
print(alphalist)
alphabet = "".join(alphalist)
print(alphabet)


# Insert new charcters between joined items
alphabet = "abcdefghijklmnopqrstuvwxyz"
alphalist = list(alphabet)
alphalist[0] = "4"
print(alphalist)
alphabet = "!\n".join(alphalist)
print(alphabet)

# Tuples

(1, 2)
(1, "Sandhya", "Ram")
sandhya = 1, "Sandhya", "Ram"
sandhya = (1, "Sandhya", "Ram")
one = (1)  # one-sized tuple
()  # zero-sized tuple
one, two, three = (1, 2, 3)
# Destructuring Assignment
sandhya = (1, "Sandhya", "Ram")
first_name = sandhya[1]
last_name = sandhya[2]

# range()

# Range

range(10)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Range with Offset

range(10, 20)
[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# Range with Skipping

range(10, 20, 2)
[10, 12, 14, 16, 18]

# For loop

names = ['George', 'W', 'Bush']
for name in names:
print(name)
name = 'George W Bush'
for character in name:
    print(character)
For Loops: Ranges

for number in range(0, 10):
    print(number)
for number in range(0, 10, 2):
    print(number)
