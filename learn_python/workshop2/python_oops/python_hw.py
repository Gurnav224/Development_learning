### 1. `BookStore`

## Create a class `Book` with attributes `title`, `author`, and `copies`. Add a method `is_available()` that returns `True` if `copies > 0`.
from pickle import MARK
from pydoc import help


class Book:
  def __init__(self, title, author, copies):
    self.title = title 
    self.author = author
    self.copies = copies
    
  def is_available(self):
    if (self.copies > 0) :
      return True
    else:
      return False



book1 = Book("book1", "author1", 33)

# print(book1.is_available())


### 2. `WeatherCheck`

# Create a class `Weather` with temperature (in Celsius) as a property. Add a method `is_hot()` that returns `True` if temp is above 35°C.

class Weather:
  def __init__(self,temp) :
    self.temp = temp
  
  def is_hot(self):
    if self.temp > 35:
      return True
    else:
      return False



weather = Weather(45)

# print(weather.is_hot())


### 3. `MarksEvaluator`

#Define a class `Marks` with name and score. Write a method `grade()` that returns:

#- “Excellent” for score > 90
# - “Good” for 70–90
# - “Average” for 40–69
# - “Fail” otherwise


class Marks:
  def __init__(self , name, score):
    self.name = name
    self.score = score
    
  def grade(self):
    if self.score > 90:
      return "Excellent"
    elif self.score >= 70 and  self.score <= 90:
      return "Good"
    elif self.score >= 40 and self.score <= 69:
      return "Average"
    else:
      return "Fail"


student1 = Marks('gurnav',94)
student2 = Marks('priya',33)
# print(student1.grade())
# print(student2.grade())


### 4. `TaskManager`

# Create a class `Task` with task name and status. Create 3 task objects. Write a method `mark_done()` to set the status as `"Done"` and print the updated task.


class Task:
  def __init__(self, name, status):
    self.name = name
    self.status = status
    
  def mark_done(self):
      self.status = 'done'
      return {
        "name":self.name,
        "status":self.status
      }
     
     
task1 = Task('python homework','not done')
task2 = Task('python homework','not done')
task3 = Task('python homework','not done')

print(task1.mark_done())


### 5. `CartItem`

# Create a class `CartItem` with name, price, and quantity. Add a method `get_total_price()` that returns price × quantity.

class CartItem:
  def __init__(self, name, price, quantity):
    self.name = name
    self.price = price
    self.quantity = quantity
    
  def get_total_price(self):
    return self.quantity * self.price

cart = CartItem('iphone 15', 150000, 2);

print(cart.get_total_price())


### 6. `UserProfile`

# Write a class `User` that accepts `name` and `email`. Add a method `update_email(new_email)` that updates the user's email.
# 


class User:
  def __init__(self , name, email):
    self.name = name
    self.email = email
  
  def update_email(self, new_email):
    self.email = new_email
    return {'name':self.name, 'email':self.email}


user = User('user1', 'user1@gmail.com')

print(user.update_email('new_user1@gmail.com'))    

### 7. `GymProgress`

# Create a `GymMember` class with attributes: `name`, `sessions_attended`, `goal`. Add method `progress()` that prints how many sessions are left to reach the goal.
# 


class GymMember:
  def __init__(self , name, sessions_attended, goal):
    self.name = name
    self.sessions_attended = sessions_attended
    self.goal = goal
  
  def progress(self):
    return self.goal - self.sessions_attended
    

gym1 = GymMember('guranv',3,10)

print(gym1.progress())


### 8. `RestaurantBill`

# Create a `Bill` class with food_item, price, and tip. Add method `final_amount()` that returns price + tip.
# 

class Bill:
  def __init__(self, food_item, price, tip):
    self.food_item = food_item
    self.price = price
    self.tip = tip
  
  def final_amount(self):
    return self.price + self.tip

RestaurantBill = Bill('mango juice',50,10)

print(RestaurantBill.final_amount())


### 9.  `InvoiceGenerator`

# Create a class `Invoice` with `customer_name`, `items`, and `total_amount`. Add a method `generate_receipt()` that prints a bill-like structure.
# 

class Invoice:
  def __init__(self, customer_name, items ,total_amount):
    self.customer_name = customer_name
    self.items = items
    self.total_amount = total_amount
    
  def generate_receipt(self):
    return f"name:{self.customer_name} \nItems: {self.items} \nTotal Amount:{self.total_amount}"
    
    
InvoiceGenerator = Invoice('Rahul',['wifi bill','petrol'],3000)

print(InvoiceGenerator.generate_receipt())


### 10.  `GameScore`

# Create a class `Player` with attributes `username` and `high_score`. Add a method `update_score(new_score)` which updates the score only if `new_score` is higher.
# 

class Player:
  def __init__(self, username, high_score):
    self.username = username
    self.high_score = high_score
    
  def update_score(self, new_score):
    if new_score > self.high_score:
      self.high_score = new_score 
    
    return self.high_score
    
GameScore = Player('Abhishek',300)

print(GameScore.update_score(500))


### 11.  `StockTracker`

# Create a class `Stock` with `company_name`, `current_price`, and `yesterday_price`. Add a method `has_increased()` to check whether the stock price increased.
# 


class Stock:
  def __init__(self,company_name, current_price, yesterday_price):
    self.company_name = company_name
    self.current_price = current_price
    self.yesterday_price = yesterday_price
    
  def has_increased(self):
    if self.current_price > self.yesterday_price:
      return "Yes"
    else:
      return "No"
      
      

StockTracker = Stock('Tesla', 200, 300)

print(StockTracker.has_increased())


### 12.  `PizzaOrder`

# Write a class `Pizza` with `size`, `toppings`, and `price`. Add a method `order_summary()` that returns a string summarizing the order.
# 

class Pizza:
  def __init__(self, size, toppings, price):
    self.size = size
    self.toppings = toppings
    self.price = price
    
  def order_summary(self):
    return f"The order summary : \nSize : {self.size} \nTopings: {self.toppings} \nPrice: {self.price}"
    


PizzaOrder = Pizza('large','burger',129)

print(PizzaOrder.order_summary())


### 13.  `WishlistApp`

# Create a `Wishlist` class where users can `add_item(item)` and view their current list. Don’t use `append()` — store items in a string for now to simplify.
# 

class Wishlist:
  def __init__(self, items=""):
    self.items = items
  
  def add_item(self, item):
    if self.items:
      self.items +=", "+item
    else:
      self.items = item
      
    return self.items

WishlistApp = Wishlist('fruit , books')

print(WishlistApp.add_item('pen drive'))



### 14.  `GoalTracker`

# Create a class `Goal` with `description` and `completed` (Boolean). Add method `mark_complete()` and `show_status()`.
# 

class Goal:
  def __init__(self, description, completed):
    self.description = description
    self.completed = completed
    
  def mark_complete(self):
    self.completed = True
  
  def show_status(self):
    return f"Goal: '{self.description}' - {'Completed ✅' if self.completed else 'Incomplete ❌'}"
    
    
GoalTracker = Goal('create backend Repo', False)
  
GoalTracker.mark_complete()

print(GoalTracker.show_status())