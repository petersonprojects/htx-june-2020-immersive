

# Functions

def greeting():
    print("Hello World")


def f(x):
    return 2 * x + 1


f(4)


def g(x):
    return x + 1


for x in range(-3, 5):
    print("f({x})={y} \t g({x})={z}".
        format(
              x=x, y=f(x), z=g(x)
        ))

# Reduce the code

# How can we reduce this code?
print("Day 1: Students in SRE class")
print("lecture: git 101")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")
print("Day 2: Students in SRE class")
print("lecture: git 102")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")
print("Day 3: Students in SRE class")
print("lecture: python 101")
print("Shu")
print("Thomas")
print("Gustavo")
print("Alim")


# Building a function 

def getGroceries():
    print('milk')
    print('flour')
    print('sugar')
    print('butter')
    print() 
    
# Run a function 

getGroceries()


# Nested Functions 

# This function just prints a line of asterisks followed by a blank line
def separateRuns():
    print('******************')
    print()      #blank line
def getGroceries():
    print('milk')
    print('flour')
    print('sugar')
    print('butter')
    separateRuns()     # call another function
# Main code starts here:
getGroceries()
getGroceries()

# Functions with parameters 

def add(num1, num2):
    return num1 + num2
result = add(2, 3)
print(result)


# Order of parameters 

def make_formal_greeting(name, title):
    return f"This is {name}, the {title}!"
result = make_formal_greeting("Rob Stark", "King in the North")
print(result)
oops = make_formal_greeting("King in the North", "Rob Stark")
print(oops)

# Order of parameters 

def hello(name):
    print('Hello ' + name)
hello('Juan')
hello('Mubin')


# Building User-Defined Functions with Parameters
def separateRuns():
    print('******************')
    print()      #blank line
def getGroceries(item1):    # uses one parameter variable
    print(item1)  # prints the contents of the item1 variable
    print('flour')
    print('sugar')
    print('butter')
    separateRuns()
getGroceries('eggs')
getGroceries('beer')
getGroceries('apples')

# Building a Simple Function That Does Addition
def addTwo(startingValue):
    endingValue = startingValue + 2
    print('The sum of', startingValue, 'and 2 is:', endingValue)
# Call the function twice with different arguments
addTwo(5)
addTwo(10)


# Building a Function to Calculate an Average
def calculateAverage(param1, param2, param3, param4):
    # Add up numbers, divide by the number of numbers
    total = param1 + param2 + param3 + param4
    average = total / 4.0
    print('Average value is:', average)
calculateAverage(2, 3, 4, 5)
calculateAverage(-3, 5.2, 15, 1000.8)
calculateAverage(1.4, -2.5, 14.3, 200.5)


# Returning none 

def addTwo(startingValue):
    endingValue = startingValue + 2
    print('The sum of', startingValue, 'and 2 is:', endingValue)
result = addTwo(5)
print(result)  # None

# Another example of None
def square(number):
    answer = number * number
    return     #  Note: this is an error, does not return an answer
userNumber = input('Enter a number: ')
userNumber = float(userNumber)   # convert to a float
numberSquared = square(userNumber)   # call the function and save the result
print('The square of your number is', numberSquared)

# Returning single value
def square(number):
    answer = number * number
    return answer    #  This returns the correct answer

# Returning more than one value

def myFunction(parameter1, parameter2):
    #
    # Body of the function, calculates
    # values for answer1, answer2, and answer3
    return answer1, answer2, answer3   # hand back three answers to the caller
variable1, variable2, variable3 = myFunction(argument1, argument2)

# Args and Keyword Args

from math import sqrt
def quadratic(a, b, c):
    x1 = -b / (2*a)
    x2 = sqrt(b**2 - 4*a*c) / (2*a)
    return (x1 + x2), (x1 - x2)

quadratic(31, 93, 62)

quadratic(b=93, c=62, a=31)

print('comma', 'separated', 
'words', sep=', ')
# comma, separated, words

# Return statements break the code block
def sayHello(name):
    print('Hello')
    return
    print(name)
    
# switch style code block with return 

import random
def getAnswer(answerNumber):
    if answerNumber == 1:
        return 'It is certain'
    elif answerNumber == 2:
        return 'It is decidedly so'
    elif answerNumber == 3:
        return 'Yes'
    elif answerNumber == 4:
        return 'Reply hazy try again'
    elif answerNumber == 5:
        return 'Ask again later'
    elif answerNumber == 6:
        return 'Concentrate and ask again'
    elif answerNumber == 7:
        return 'My reply is no'
    elif answerNumber == 8:
        return 'Outlook not so good'
    elif answerNumber == 9:
        return 'Very doubtful'
r = random.randint(1, 9)
fortune = getAnswer(r)
print(fortune)

# Temperature Conversion 
def F2C(nDegreesF):
    nDegreesC = (nDegreesF - 32) * (5.0 / 9.0)
    return nDegreesC
def C2F(nDegreesC):
    nDegreesF = (1.8 * nDegreesC) + 32
    return nDegreesF 

# Code to ask the user to input values for conversion:
usersTempF = input('Enter a value of degrees Fahrenheit: ')
usersTempF = float(usersTempF)
convertedTempC = F2C(usersTempF)
print(usersTempF, 'degrees Fahrenheit is:', convertedTempC, 'degrees Centigrade.')
usersTempC = input('Enter a value of degrees Celsius: ')
usersTempC = float(usersTempC)
convertedTempF = C2F(usersTempC)
print(usersTempC, 'degrees Centigrade is:', convertedTempF, 'degrees Fahrenheit.') 

# Placement of Functions
result = addTwo(5)
def addTwo(startingValue):
    endingValue = startingValue + 2
    print('The sum of', startingValue, 'and 2 is:', endingValue)
    return endingValue
print(result) 

# Local Scope 

def dance():
    kind = "silly"
    print("I am doing a %s dance" % kind)
dance()
print(kind)


# Local Variables
TAX_RATE = .09  # 9 percent tax
COST_PER_SMALL_WIDGET = 5.00
COST_PER_LARGE_WIDGET = 8.00
def calculateCost(nSmallWidgets, nLargeWidgets):
    subTotal = (nSmallWidgets * COST_PER_SMALL_WIDGET) + (nLargeWidgets * COST_PER_LARGE_WIDGET)
    taxAmount = subTotal * TAX_RATE
    totalCost = subTotal + taxAmount
    return totalCost
total1 = calculateCost(4, 8)  #  4 small and 8 large widgets
print('Total for first order is', total1)
total2 = calculateCost(12, 15)

# Every function has its own local scope
def dance():
    kind = "silly"
    print("I am doing a %s dance" % kind)
def dance2():
    print("I want to do a %s dance" % kind)    
dance()
dance2()

# Do parameters and local variables have the same scope?
def dance(kind="silly"):
    print("I am doing a %s dance" % kind)
dance("funky") # Totally OK.
print(kind) # Error!

# Global Variables

kind = "mesmerizing"
def dance():
    print("I am doing a %s dance" % kind)
dance() # Totally OK.
print(kind) # Also totally OK.

# Another Global Scope Example
firstTriangleSide1 = input('Enter side 1: ')
firstTriangleSide2 = input('Enter side 2: ')
hypot1 = calculateHypotenuse(firstTriangleSide1, firstTriangleSide2) # call function to do calc
secondTriangeSide1 = input('Enter the first side: ')
secondTriangeSide2 = input('Enter second side: ')
hypot2 = calculateHypotenuse(secondTriangeSide1, secondTriangeSide2) # call function to do calc
print('The hypotenuse of the first triangle is:', hypot1)
print('The hypotenuse of the second triangle is:', hypot2)

# Global Variables and Local Variables with the Same Names
def myFunction():
    someVariable = 5
someVariable = 10
myFunction()
print(someVariable)
