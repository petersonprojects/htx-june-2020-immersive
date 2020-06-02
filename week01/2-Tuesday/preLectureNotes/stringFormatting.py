
## String Formatting

first_name = "Snoop"
last_name = "Dog"

print("Hello {} {}".format(first_name, last_name))


print("Hello {0} {1}, again {0}".format(first_name, last_name))


print("Hello {first} {last}, again {first}".format(first=first_name, last=last_name))

## f-strings

param1 = 'first'
param2 = 'second'
f'Parameters {param1}:{param2}'

## Legacy Formatting 

name = 'Carlos'
age = 5 
sentence = '%s is %d years old.' % (name, age)


verb = 'riding'
adjective = 'great'
sentence = 'Most doctors agree that bicycle %s is a/an %s form of exercise.' % (verb, adjective)