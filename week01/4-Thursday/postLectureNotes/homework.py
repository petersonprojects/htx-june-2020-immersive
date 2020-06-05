

# for x in range(1, 11):
#     print(x)

# base = int(input("Enter base size: "))

# for x in range(base+1):
#     print("*"*(base))
#     base = base -1

# num = [5, 10, 15, 20, 25]
# length = len(num)
# factor = 5
# numsMult = []

# for x in range(length)
#     numsMult.append(num[x]*factor)

# for val in num:
#     numsMult.append(val *  factor)


#[0, 1, 2, 3]

# for i in range(base):
#     print('*' + '*' * (i))


# print("I will print out a range of numbers. Please specify your starting and ending number >>")
# start_num = int(input("Please enter a starting number >> "))
# end_num = int(input("Please enter your ending number >> "))

# for num in range(start_num, end_num + 1):
#     print(num)

# [1, 2, 3, 4, ]
# for i in range(1,11):
#     if (i%2 != 0):
#         print(i)


# [0, 1, 2, 3, 4]

# n = int(input("How large would you like the square to be? > "))
# for rows in range(n):
#     print('*' * n)
# # print('*****')
# star = []
# for cols in range(5):
#     # star = star + '*'
#     star.append('*')

# startStr = "".join(star)
# print(startStr)


# height = int(input("height>> "))
# width = int(input("width >> "))

# for h in range(0, height):
#     if h == 0 or h == height - 1:
#         print("*" * width)
#     else:
#         print("*" + " " * (width - 2)      + "*")


# numList = [4, 3, 8, 9, 10, 5]

# mymax = numList[0]
# for num in numList:
#     if num < mymax:
#         mymax = num

# print(mymax)


def newNums():
    nums = [-1, -7, 8, -3, 4, 5, -9, 12]
    newNums = []

    for num in nums:
        if num>= 0 :
            newNums.append(num)
            # print(num)

    print(newNums)
    print(nums)

    l1 = [2, 4, 6]
    l2 = [2, 3, 6]
    nl = []
    for i in range(0, len(l1)):
        nl.append(l1[i]*l2[i])
    print(nl)


def matrix():
    matrix1 = [ [1,3], [2,4]]  
    matrix2 = [ [5,2], [1,0]]
    matrix3 = []



    for i in range(2):
        tempList = []
        
        for j in range(2):
            tempList.append(matrix1[i][j] + matrix2[i][j])
            print(matrix1[i][j])
            
        matrix3.append(tempList)
        
    print(matrix3)
    
menuItem = 0  
while True:
    if menuItem == 1:
        matrix()
    elif menuItem == 2:
        