from flask import Flask , request

app = Flask(__name__)

@app.route('/')
def hello():
  return "Hello Falsk"

# Endpoint 1  GET /greet
@app.route('/greet/<string:name>/',methods=['GET'])
def greet_user(name):
   return name

# Endpoint 2: POST /submit-feedback

@app.route('/submit-feedback', methods=['POST'] )
def add_feedback():
  response = request.get_json()
  name = response['name']
  message = response['message']
  rating = response['rating']
  
  return {
  "status": "success",
  "reply": f"Thanks {name} We appreciate your feedback."
}

# Endpoint 3:  GET /location
@app.route('/location/<string:city>', methods=['GET'])
def get_location(city):
   return { "message": f"You're checking data for {city}." }

# Endpoint 5: POST /book-review

@app.route('/book-review',methods=['POST'])
def add_review():
   response_data = request.get_json()
   name = response_data['name']
   rating = response_data['rating']
   return { "message": f"Thanks for reviewing {name}. Your rating: {rating}" }


# Endpoint 6: POST /contact-form

@app.route('/contact-form', methods=['POST'])
def get_form_data():
   form_data = request.get_json()
   name = form_data['name']
   email = form_data['email']
   message = form_data['message']
   return { "reply": f"Thanks {name}, we’ll contact you soon at {message}." }


# Endpoint 7: GET /convert-temp
@app.route('/convert-temp', methods=['GET'])
def convert_temp():
   celsius = request.args.get('celsius', type=float)
   if celsius is None:
       return {"error": "Missing 'celsius' query parameter"}, 400
   fahrenheit = (celsius * 1.8) + 32
   return {"fahrenheit": fahrenheit}


# Endpoint 8:  POST /billing

@app.route('/billing', methods=['POST'])
def get_billing():
   request_data = request.get_json()
   item_name = request_data['item_name']
   unit_price = request_data['unit_price']
   quantity = request_data['quantity']
   return {
      "total_amount":unit_price * quantity
      }

# Endpoint 9: POST /goals

@app.route('/goal',methods=['POST'])
def get_goal():
   request_data = request.get_json()
   goal_list = request_data['goals']
   return {
      "goals_count":len(goal_list)
      }

# Endpoint 10: POST /emergency
@app.route('/emergency',methods=['POST'])
def alert_emergency():
   request_data = request.get_json()
   name = request_data['name']
   issue = request_data['issue']
   location = request_data['location']
   return {
      "alert":f"Help request from {name} at {location}. Issue: {issue}"
      }
  
# Endpoint 11: GET /event

@app.route('/event',methods=['GET'])
def get_event():
   event_name = request.args.get('event_name')
   date = request.args.get('date')
   return { "confirmation": f"{event_name} is scheduled on {date}" }


# Endpoint 12: POST /delete-item

@app.route('/delete-item',methods=['POST'])
def get_item():
  mock_item = [
     {
      "item_name":"fruit",
      "quantity":3
      },
      {
      "item_name":"buy new earbuds",
      "quantity":3
      }
     ]
  item_name = request.args.get('item_name')

  mock_item = [item for  item in mock_item if item["item_name"] != item_name]

  return { "message": f"{item_name} has been removed.",
          "items":mock_item }



if __name__ == "__main__":
    app.run(debug=True)