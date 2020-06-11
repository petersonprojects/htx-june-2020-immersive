
def smallest(numList):
    numList.sort()
    numList.append(999)
    return numList[0]

numberList = [2000, 5, 10, -15000, 20, 25, 30]
# print("pre", numberList)


# result = smallest(numberList)


# print("post", numberList)


# print(f'Smallest number in the list is: {result}')


# def small(nList):

#     smallestNum = nList[0]  # -1500

#     for val in nList:

#         if(val < smallestNum):
#             smallestNum = val

#     return smallestNum

# result = small(numberList)

# print(result)


# phoneNo = { "dan": "832-333-3333",
#            "jeremey": "281-333-3333",
#            "micah": "713-333-3333",
#            713: True,
#            False : "Houston",
#            False : "Denver"
#            }

# no = phoneNo[False]

# print(no)

# whoa = {
#     "mindIsBlown" : {"theMeaningOfLife" : 42},
#     "toDoList": ["sing", "laugh", "dance", "cry"]
# }

# CRUD 

# my_dictionary = {
#     "hello" :   "world",
#     "sqareOfTwo" : 4,
#     "theMeaningOfLife" : 42,
#     0 : 1
# }

# print(my_dictionary)
# for k, v in my_dictionary.items():
#     print(f"{k} {v}")
    

# [(key, value), (key, value), (key, value),]
# items = my_dictionary.items() 

# print(items)


# my_dictionary["newKey"] = "newValue"

# my_dictionary["hello"] = "changed value"

# del my_dictionary["sqareOfTwo"]

# allKeys = my_dictionary.keys()

# allValues = my_dictionary.values()

# print(allValues)

# for val in allKeys:
#     print(val)

# print(allKeys)
# print(my_dictionary)

# isItThere = "wat" in my_dictionary

# if "wat" in my_dictionary:
#     print(my_dictionary["wat"])
# else:
#     print("key not found")



# watIs = my_dictionary.get("hello")
# print(watIs)


# contact = [
#     {
#         'first_name': 'Phillip',
#         'last_name': 'Guo',
#         'email': 'phillip.guo@gmail.com',
#         'phone':{
#             'work':'837-494-3948',
#             'cell': '234-897-4933'
#         }
#     },
#     {
#         'first_name': 'Mark',
#         'last_name': 'Guzdial',
#         'email': 'mark.guzdial@gatech.edu',
#         'phone':{
#             'work':'484-569-3466',
#             'cell': '493-485-9845'
#         }
#     }
# ]

# result = contact[1]['phone']["work"]
# print(result)
#contact [{},{},{}]
# myList = [4,5, 6, ]

friends: [{},{}]
ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
     {
       'name': 'Jasmine',
       'email': 'jasmine@yahoo.com',
       'interests': ['photography', 'tennis']
     },
     {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
     }
    ]
}




