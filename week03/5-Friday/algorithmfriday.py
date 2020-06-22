
# sumnum=0
# for i in range(0,1000):
#     if(i%5 == 0):
#         sumnum = sumnum + i
#     elif(i%3 == 0):
#         sumnum = sumnum + i

# print(sumnum)

sumnum=0

# def fibonacci(n): 
#     a = 0
#     b = 1
#     if n < 0: 
#         print("Incorrect input") 
#     elif n == 0: 
#         return a 
#     elif n == 1: 
#         return b 
#     else: 
#         for x in range(2,n): 
#             c = a + b 
#             a = b 
#             b = c 
#         return b
    
# if fibonacci(1000)%2 == 0:
#     sumnum = sumnum + fibonacci(1000)
def isPrime(n):
    if n < 2: return "Neither prime, nor composite"
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# returns the nth prime number
def nthPrime(n):
    numberOfPrimes = 0
    prime = 1

    while numberOfPrimes < n:
        prime += 1
        if isPrime(prime):
            numberOfPrimes += 1
    return prime

print(nthPrime())
# print(sumnum)

