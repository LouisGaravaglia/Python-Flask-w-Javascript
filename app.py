import os
import random 
import requests
from flask import Flask, render_template, request, flash, redirect, session, g, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy.exc import IntegrityError
# from forms import UserAddForm, LoginForm, MessageForm, UserEditForm
from models import db, connect_db

CURR_USER_KEY = "curr_user"

app = Flask(__name__)

# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
app.config['SQLALCHEMY_DATABASE_URI'] = (
os.environ.get('DATABASE_URL', 'postgres:///warbler'))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")
toolbar = DebugToolbarExtension(app)

connect_db(app)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def result_page():
    """shows API response"""
    
    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    errs = {}
    colors = ["Red", "Green", "Blue", "Orange", "red", "green", "orange", "blue", "RED", "GREEN", "ORANGE", "BLUE"]

    if name == "" or name is None:
            errs.update({"name": ["This field is required."]})

    if email == "" or email is None:
            errs.update({"email": ["This field is required."]})
     
    if year != None and year > 2000 or year != None and year < 1900:
            errs.update({"year": ["The year must be between 1900 and 2000."]})
            
    if year == "" or year is None:
            errs.update({"year": ["This field is required."]})
    
    if color == "" or color is None:
            errs.update({"email": ["This field is required."]})                   
            
    if color not in colors:
            errs.update({"color": ["Invalid value, must be one of: red, green, orange, blue."]})   
        
    if errs:
        return {"errors": errs}
    
    else:
        baseURL = "http://numbersapi.com"
        randomNum = random.randint(0, 100) 

        yearFact = requests.get(f"{baseURL}/{year}/year");
        numberFact = requests.get(f"{baseURL}/{randomNum}");
 
        obj = {"num": { "fact": numberFact.text, "num": randomNum  }, "year": { "fact": yearFact.text, "year": year  }}

        return jsonify(obj)
