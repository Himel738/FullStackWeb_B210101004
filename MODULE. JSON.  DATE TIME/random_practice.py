import random
# help(random)
# print(dir(random))
# print(random.__doc__)

# print(random.random())  # the value will be given in the range 0.0 <= x < 1.0
# print(random.uniform(5,10)) # the value will be given in the range 5.0 <= x < 10.0
# print(random.randint(1,10)) # the value will be given in the range 1 <= x <= 10

fruits =['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
print(random.choice(fruits)) # it will return a random element from the list
random.shuffle(fruits) # it will shuffle the list in place
print(fruits)