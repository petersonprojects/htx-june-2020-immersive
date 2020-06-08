
# Class

class Greeting:
  def say_hello():
    print("Hello there!")
    
class Person:
  def __init__ (self, name):
    self.name = name
    self.count = 0
  def greet (self):
    self._greet()
  def _greet (self):
    self.count += 1
    if self.count > 1:

# Creating Instance Methods 

class Person:
  def greet (self):
    print("Hello")
me = Person()
me.greet()

# Working With Constructors 

class MyClass:
    def __init__(self):
      print("Upon Initialization: Hello!")
    def instance_method(self): 
      print("hello instance")
    def class_method():
      print("Hello class method!")
test = MyClass()
test.instance_method()
MyClass.class_method()
test.class_method() 


import datetime # we will use this for date objects
class Person:
    def __init__(self, name, surname, birthdate, address, telephone, email):
        self.name = name
        self.surname = surname
        self.birthdate = birthdate
        self.address = address
        self.telephone = telephone
        self.email = email
    def age(self):
        today = datetime.date.today()
        age = today.year - self.birthdate.year
        if today < datetime.date(today.year, self.birthdate.month, 
        self.birthdate.day):
            age -= 1
        return age  
    
# Instance Variables 

class Person:
  GlobalPerson = "Zelda"
  def __init__ (self, name):
    self.name = name
  def greet (self, friend):
    print("Hello {} and {} and {}".format(self.name, friend, self.GlobalPerson))
me = Person('Paul')
me.greet('Pepper')
matt = Person('Matt')
matt.greet('Eric')
travis = Person('Travis')
travis.greet('Hussein')
Person.GlobalPerson = "Skyler"
me.greet('Pepper')
matt.greet('Eric')
travis.greet('Hussein')

# Creating Class Methods

class MyClass:
      def SayHello():
        print("Hello there!")
MyClass.SayHello()


# Class Variables

class MyClass:
    Greeting = ""
    def SayHello(self):
            print("Hello {0}".format(self.Greeting))
MyClass.Greeting = "Zelda"


# MyClass.SayHello()
test = MyClass()
test.SayHello()
test2 = MyClass()
test.SayHello()

# More Class Patterns 

class Person:
  def __init__ (self, name):
    self.name = name
    self.count = 0
  def greet (self):
    self._greet()
  def _greet (self):
    self.count += 1
    if self.count > 1:
      print("Stop being so nice")
      self.__reset_count()
    else:
      print("Hello", self.name)
  def __reset_count(self):
    self.count = 0
    
# Accessor Modifiers in Python

class Test(object):
    def __init__(self):
        self.__a = 'a'
        self._b = 'b'
t = Test()
t._b
# 'b'

t.__a
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# AttributeError: 'Test' object has no attribute '__a'

# Inheritance

class Animal:
  def __init__ (self, name):
    self.name = name
class Dog (Animal):
  def woof (self):
    print("Woof")
class Cat (Animal):
  def meow (self):
    print("Meow")
    
# Implicit Inheritance
    class Parent(object):
        def implicit(self):
            print("PARENT implicit()")
    class Child(Parent):
        pass
    dad = Parent()
    son = Child()
    dad.implicit()
    son.implicit()
    
# Override Explicitly
    class Parent(object):
        def override(self):
            print("PARENT override()")
    class Child(Parent):
        def override(self):
            print("CHILD override()")
    dad = Parent()
    son = Child()
    dad.override()
    son.override()
    
# Alter Before and After 

class Parent(object):
        def altered(self):
            print("PARENT altered()")
    class Child(Parent):
        def altered(self):
            print("CHILD, BEFORE PARENT altered()")
            super(Child, self).altered()
            print("CHILD, AFTER PARENT altered()")
    dad = Parent()
    son = Child()
    
# THE REASON FOR SUPER()
class SuperFun(Child, BadStuff):
    pass

# Using super() with init
class Child(Parent):
    def __init__ (self, stuff):
        self.stuff = stuff
        super(Child, self).__init__()
        
# COMPOSITION
class Other(object):
    def override(self):
        print("OTHER override()")
    def implicit(self):
        print("OTHER implicit()")
    def altered(self):
        print("OTHER altered()")
            
class Child(object):
        def __init__(self):
            self.other = Other()
        def implicit(self):
            self.other.implicit()
        def override(self):
            print("CHILD override()")
        def altered(self):
            print("CHILD, BEFORE OTHER altered()")
            self.other.altered()
            print("CHILD, AFTER OTHER altered()")

# Student Management System Using Composition
class Student(object):
    def __init__(self, firstName, lastName, campus):
        self.firstName = firstName
        self.lastName = lastName
        self.campus = campus
    def printStudent(self):
        print(f"{self.firstName} {self.lastName} campus: {self.campus}")
        
class Campus(object):
    def __init__(self):
        self.students = []
    def addStudent(self, firstName, lastName, campus):
        temp  = Student(firstName, lastName, campus)
        self.students.append(temp)
    def showCurrentStudent(self):
        for studentObject in self.students :
            print(f"{studentObject.firstName} {studentObject.lastName} campus: {studentObject.campus}")
            
# Student Management System Using Composition
management = Campus()
management.addStudent("Sabrina", "Goldfarb", "Houston")
management.addStudent("Michael", "Dao", "Houston")
management.addStudent("Cindy", "Smith", "Atlanta")
management.addStudent("Alfie", "Santos", "Houston")
management.showCurrentStudent()
            
