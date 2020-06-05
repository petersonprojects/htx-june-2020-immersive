
# Dictionaries
my_dictionary = {
    "hello":   "world",
    "squareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}

whoa = {
    "mindIsBlown": {
        "theMeaningOfLife": 42
    },
    "toDoList": ["sing", "laugh",
                  "dance", "cry"]
}

# Indexing
my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
helloIs = my_dictionary["hello"]
print(helloIs)

# get()

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
watIs = my_dictionary["wat"]
print(watIs)

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
watIs = my_dictionary.get("wat")

# in

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
isItThere = "wat" in my_dictionary
print(isItThere)

# setting values

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
my_dictionary["theMeaningOfLife"] = "wat"
wat = my_dictionary["theMeaningOfLife"]
print(wat)
my_dictionary["newKeyName"] = "hello world"
print(my_dictionary)

# keys() and values()

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
keys = my_dictionary.keys()
print(keys)
my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
values = my_dictionary.values()

# del items()
my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
del my_dictionary["theMeaningOfLife"]
print(my_dictionary)

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
items = my_dictionary.items()

# iterating

my_dictionary = {
    "hello":   "world",
    "sqareOfTwo": 4,
    "theMeaningOfLife": 42,
    0: 1
}
for key, value in my_dictionary.items():
    print(key)
    print(value)

# Nesting
contact = [
    {
        'first_name': 'Phillip',
        'last_name': 'Guo',
        'email': 'phillip.guo@gmail.com',
        'phone': {
            'work': '837-494-3948',
            'cell': '234-897-4933'
        }
    },
    {
        'first_name': 'Mark',
        'last_name': 'Guzdial',
        'email': 'mark.guzdial@gatech.edu',
        'phone': {
            'work': '484-569-3466',
            'cell': '493-485-9845'
        }
    }

