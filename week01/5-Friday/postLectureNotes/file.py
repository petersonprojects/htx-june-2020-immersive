


# file_handler = open('../hello.txt', 'w')

# file_handler.write("We the People of the United States,\n in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of")

# file_handler.close()

# file_handler = open('sample.html', 'r')

# contents = file_handler.read()

# file_handler.close() 

# print(contents)

import pickle

# data = {'name': 'Paul'}

# with open('data.pickle', 'wb') as fh:
#     pickle.dump(data, fh)


with open('data.pickle', 'rb') as fh:
    data = pickle.load(fh)
    print(data["name"])
