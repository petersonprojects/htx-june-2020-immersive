

# name = "value"

# name = "newValue"


# day1 = "Monday"
# day2 = "Tuesday"
# day3 = "Wednesday"

# days = ["Monday", "Tuesday", "Wednesday",
#         "Thursday", "Friday", "Saturday", "Sunday"]

# print(days)
# days[3] = "thur"

# print(days)

# nList = [3, 5, 6, 7, False, True, "sample", [2, 4]]

# print(len(days))


# num = [4, 5, 7, 8, 3, 2]

# num.append(555)
# num.append(345)
# print(num)

# todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

# todos.append("binge watch a show")
# todos.append("go to sleep")

#print(todos)

# index = 0
# while index < len(todos):
#     print(todos[index])
#     index += 1

# list_a = [3, 4, 5]
# list_b = [8, 9, 10]

# list_c = list_a + list_b

# print(list_c)
# print(list_a)
# print(list_b)


# todos.append(["todo item 1", "todo item2"])

# print(todos)


# del todos[1:4]

# print(todos)

# todos = []
# index = 0


# while True :
#     index = 0
#     task = input("What would you like to do?\n1. add a item\n2.remove item\n3.Print items\n4.exit\n>>>   ")
    
#     if int(task) == 1:
#         todoItem = input("Please enter a todo list item >>>   ")
#         todos.append(todoItem)
#         # add item
#     elif int(task) == 2: 
#         # remove item
#         print('Which item do you want to delete?')
        
#         while index < len(todos):
#             # print(todos[index])
#             print(f'{index + 1}.{todos[index]}')
#             index += 1
        
#         delItem = input("item# >> ")
        
#         delItemNum = int(delItem)
        
#         del todos[delItemNum - 1]
        
        
#     elif int(task) == 3:
#         while index < len(todos):
#             print(todos[index])
#             index += 1
#         #print items
#     elif int(task) == 4: 
#         break

# listNums = [4, 8, 3, 2, 9, 0]

# print(listNums)

# listNums.clear() 

# print(listNums)

# newListNums = listNums[2:5]

# listNums.insert(4, "hello")


# print(listNums)
# while len(listNums) > 0:
#     listNums.pop()
#     print(listNums)
    
# index = listNums.index(9)

# print(index)

# sortNums = listNums.sort()

# print(sortNums)

# a = 4 

# b = a  

# a = 6

# b = 10 

# print(a)  # 6  

# print(b) # 10 
# print(a)

# list_a = [4, 6, 8]

# list_b = list_a.copy() 

# list_b.append("new item")

# print(list_b)

# print(list_a)


# myList = [1, 2, 1]

# newList = myList * 3

# print(newList)

# x = [ [2,6],
#      [6,2],
#      [8,2],
#      [5,12] ]


# print(x[1][0])


# a = [ 
#     [2, 4, 6, 8 ], # a[0] 
#     [ 1, 3, 5, 7 ], # a[1] 
#     [ 8, 6, 4, 2 ],  #a[2]
#     [ 7, 5, 3, 1 ] #a[3]
#     ]

# outsideIndex = 0
# innerIndex = 0
    
# while outsideIndex < len(a):
#     while innerIndex < len(a[outsideIndex]) :
#         item = a[outsideIndex][innerIndex]
#         print(f'{item}')
#         innerIndex +=1
#     innerIndex = 0    
#     outsideIndex +=1
    
    
# myString = "Hello"

# print(myString[1])

# alphabet = "abcdefghijklmnopqrstuvwxyz"
# rev_alph = ""
# index = 0
# while index < len(alphabet):
#     rev_alph = alphabet[index] + rev_alph
#     index +=1
    
# print(rev_alph)

# index = 0
# while index < len(alphabet):
#     print(alphabet[index])
#     index +=1 
    
# nums = [1, 2, 4 ]

# nums.reverse()

# print(nums)

# alphabet = list(alphabet)

# alphabet.reverse() 

# alphabet = "".join(alphabet)

# print(alphabet)

# nums[2] = 44

# alphabet[0] = "p"

# alphabet = list(alphabet)

# print(alphabet)


myList = [4, 7, 9, 2]

#range(10) => [0, 1, 2, 3]
# range(10,20,2) => [10, 13, 16, 19]
for val in range(10, 20, 3) :
    print(val)
    

# 1 x 1 = 1 
# 1 x2 = 2 
# 1X 3 = 3 
# 1x4 = 4 


# 2 x 1 = 2
# 2 x 2 = 4

# [0, 1, 2, 3, 4, 5, 6, 7, 8. 9 10]

for rows in range(1, 11):
    for cols in range(1, 11):
        result = rows * cols
        print(f'{rows} x {cols} = {result}')
        
        
