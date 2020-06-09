

# class Greeting:
#     def say_hello(self, name):
#         print(f"Hello world {name}")


# hello = Greeting()

# hello.say_hello("Dan")

# hello1 = Greeting()

# hello1.say_hello("Jeremy")

# class Student:
#     def __init__(self, name):
#         self.name = name

#     def greeting(self, name):
#         return f"hello {name}"


# joe = Student("joe")
# print(joe.name)

# chris = Student("chris")
# print(chris.name)

# micah = Student("micah")
# print(micah.greeting("micah"))

# rj = Student("rj")
# print(rj.greeting("RJ"))

# michael = Student("michael")
# print(michael.greeting("Michael"))


# class Person:

#     Location = "Houston, Texas"
#     def __init__(self, name, lName, birthdate, address, phone, email):
#         self.firstName = name
#         self.lName = lName
#         self.birthdate = birthdate
#         self.address = address
#         self.email = email

#         # print("Initalized")

#     def printName(self):

#         print(f"Hello {self.firstName} {self.lName}")

#     def printDetails():
#         print("Details {Location}")


# Person.printDetails()


# michael = Person("Michael", "Cortez", "1/1/2020", "123 sesame street", "713-333-3333", "michael@me.com")

# michael.printName()

#print(michael.firstName, michael.lName, michael.email)

# woody = Person("Woody", "Connell", "1/1/2020", "245 sesame street", "281-333-3333", "woody@me.com")
# woody.printName()
# woody.firstName = "woody"


# print(michael.Location)
# print(woody.Location)
# Person.Location = "Denver, Co"

# print(michael.Location)
# print(woody.Location)
# print(woody.firstName)


# class MyClass:
#       def SayHello():
#         print("Hello there!")
# MyClass.SayHello()


# class MyClass:
#     def SayHello():


# class Button:
#     def __init__(self):
#         self.count = 0

#     def click(self):
#         self.count += 1

#         if(self.count > 2):
#             print("Do need some help")
#             self.count = 0


# navButton = Button()
# helpButton = Button()


# print("nav ", navButton.count)
# print("help ", helpButton.count)

# navButton.click()
# helpButton.click()


# print("nav ", navButton.count)
# print("help ", helpButton.count)
# navButton.click()

# print("nav ", navButton.count)
# print("help ", helpButton.count)
# navButton.click()
# helpButton.click()

# print("nav ", navButton.count)
# print("help ", helpButton.count)
# navButton.click()
# helpButton.click()

# print(navButton.count)


# class Person():
#     def __init__(self):
#         self.__count =0


# dan = Person()

# print(dan.__count)


name = "woody"


class SString(str):

    def reverse(self, name):

        rstring = ""

        for char in name:
            rstring = char + rstring

        return rstring


myString = SString("hello")

print(myString.capitalize())


print(myString.reverse("hello"))


# Car - method- carDetails - print f"Car Details {self.make} {self.model} {self.color}"  make, model, year
# Hybrid - method - carType - print "I'm a hybrid"
# Electric - method - carType - print "I'm electric"

# class Parent():

#     def implicit(self):
#         print("Parent implicit()")

#     def override(self):
#         print("Parent override()")
        
#     def altered(self):
#         print("PARENT altered()")


# class Child(Parent):
#     def override(self):
#         print("Child override")
        
#     def altered(self):
#         print("CHILD, BEFORE PARENT altered()")
#         super(Child, self).altered()
#         print("CHILD, AFTER PARENT altered()")


# dad = Parent()
# child = Child()


# dad.altered()
# child.altered()
# dad.override()
# child.override()
# dad.implicit()
# child.implicit()


# class Parent(object):
#     def override(self):
#         print("PARENT override()")
        
# class Child(Parent):
#     def override(self):
#         print("CHILD override()")
        
# # dad = Parent()
# son = Child()
# # dad.override()
# son.override()

# class Parent(object):
#     def greeting(self):
#         print("PARENT altered()")
    
#     def hello(self):
#         print('hello')
        
# class Child(Parent):
#     def greeting(self):
#         print("CHILD, BEFORE PARENT altered()")
#         super(Child, self).hello()
#         print("CHILD, AFTER PARENT altered()")
        

# son = Child()

# son.greeting()


# Car - method- carDetails - print f"Car Details {self.make} 
# {self.model} {self.color}"  make, model, year
# Hybrid - method - carType - print "I'm a hybrid"
# Electric - method - carType - print "I'm electric"


# class Car():
#     def __init__(self, make, model, year):
#         self.make = make 
#         self.model = model 
#         self.year = year
        
        
#     def carDetails(self):
#         print(f"Car Details {self.make} {self.model} {self.year}")
        
# class Hybrid(Car):
#     def __init__(self, make, model, color):
#         print("hybrid car")
#         self.color = color
#         super(Hybrid, self).__init__(make, model, "")
        
#     def carDetails(self):
#         print(f"Car Details: {self.make} {self.model} {self.color}")
        
#     def carType(self):
#         print("I am a hybrid")
        
# class Electric(Car):
#     def __init__(self, make, model, year):
#         print("electric car")
#         super(Electric, self).__init__(make, model, year)
    
#     def carType(self):
#         print("I am an electric car")
        
# hybrid = Hybrid("honda", "prius", "red")
# hybrid.carDetails()

# hybrid2 = Hybrid("honda", "crv" , "green")
# hybrid2.carDetails()

# electric = Electric("tesla", "model s", "2020")
# electric.carDetails()


# class Student(object):
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
        
#     def printStudent(self):
#         print(f"{self.firstName} {self.lastName} campus: {self.campus}")



# class Campus():
#     def __init__(self):
#         self.students = []
        
#     def addStudent(self, firstName, lastName, campus):
        
#         tempStudent = Student(firstName, lastName, campus)
#         self.students.append(tempStudent)
        
#     def showCurrentStudent(self):
#         for studentObj in self.students :
            
#             print(f"{studentObj.firstName} {studentObj.lastName} {studentObj.campus}")
    
#     def find(self, fname):
#         for studentObj in self.students :
#             if( fname == studentObj.firstName):
#                 print(f"{studentObj.firstName} {studentObj.lastName} {studentObj.campus}")
#                 break
        
                

# houston = Campus()

# houston.addStudent('Dan', "G", "Houston")
# houston.addStudent('Chris', "David", "Houston")
# houston.addStudent("RJ", "Eppenger", "Houston")
# houston.addStudent("Jeremy", "Roussel", "Houston")

# houston.showCurrentStudent()
# houston.find("RJ")


class AccountHolder :
    
    def __init__(self, fname, lname, accountType, status, balance):
        self.first_name = fname
        self.last_name = lname
        self.accountType = accountType 
        self.status = status 
        self.balance = balance


class Bank:
    def __init__(self, name, address):
        self.name = name 
        self.address = address
        self.accounts = []
        
    
    def open_new_account(self, fname, lname, accountType, status, balance):
        # Create account holder 
        temp = AccountHolder(fname, lname, accountType, status, balance)
        
        # store new account holder inside account list 
        
        self.accounts.append(temp)
        
        return f"Account for {temp.first_name} {temp.last_name} was successfully created with a balance of {temp.balance}"
    
    def show_account_holders(self):
        
        for account_holder_obj in self.accounts:
            print(f'{account_holder_obj.first_name} {account_holder_obj.last_name} {account_holder_obj.balance}')
            

def main():
    wellsfargo = Bank("wells fargo", "123 sesame street")
    action = 1
    
    while action != 6:
        print("1. Create an account")
        print("2 Print list of all account holders")
        print("6. Exit application")
        
        action = int(input("What would you like to do?"))
        
        if (action == 1):
            
            fname = input("What is the first name? ")
            lname = input("What is the last name?")
            atype = input("What would like to open? Checking or Savings")
            deposit = int(input("How much would you like to deposit?"))
            
            
            response = wellsfargo.open_new_account(fname, lname,  atype, "new", deposit)
            print(response)
        elif (action == 2):
            wellsfargo.show_account_holders()
        
        elif (action == 6):
            break

main()