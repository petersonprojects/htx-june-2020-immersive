tempC = int(input("What is your Celsius temp?   "))
print(tempC*1.8 + 32, "F")

# Tip calculator
total_bill = float(input("Total bill amount? "))
service_level = input(
    "Level of service, which can be one of the folowing: good, fair or bad? ")
good = 0.20
fair = .15
bad = .10

if service_level == "good":
    total_tip = total_bill * good


elif service_level == "fair":
    total_tip = total_bill * fair

elif service_level == "bad":
    total_tip = total_bill * bad


total_bill = total_bill + total_tip

print("Tip amount ${:.2f} ".format(total_tip))
print("Total amount ${:.2f} ".format(total_bill))

bill = float(input("Total bill amount?    "))
print("Level of service?")
service = input("Please choose good, fair or bad:   ")

if service == "good":
    tip = (bill*0.20)


elif service == "fair":
    tip = (bill*0.15)


elif service == "bad":
    tip = (bill*0.10)
total = (bill+tip)

print("tip amount:  "f'${tip:.2f}')
print("total amount:  "f'${total:.2f}')


party = int(input('How many people? '))

try:
    check = float(input('Enter the amount of the bill! '))
    if check >= 0:
        tips = {'good': .2, 'fair': .15, 'poor': .1}
        service = ""
        while service not in tips:
            service = input('Was the service good, fair, or bad? ')
        print('Each Person pays ${:.2f}'.format(check*(1+tips[service])/party))
    else:
        print('Please only enter a positive number!')
except:
    print('Please only enter numerical values!')

    x = 0
    while(x < 10):
        x = x + 1
        x += 1
        print(x)


num_coins = 0
print(f"You have {num_coins} coins.")

question = input("do you want a coin?")
while True:
    question = input("do you want a coin?")
    if(question.lower() == "yes"):
        print(f"You have {num_coins} coins.")
        num_coins += 1
        
    else:
        print('bye')
        break
#Python exercise 10
coins = 0

while True:
    
    print(f"You have {coins} coin(s).")
    want_coin = input("Do you want another, yes or no? ") 
    if want_coin.lower() == "yes":
        coins += 1
    else:
        print("Bye")
        break


coins = 0
answer = input("would you like a coin?")
while answer == "yes":
    print(f"you have {coins} coins.")
    answer = input("do you want another coin?")
    coins += 1
print("bye")