import os
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
    
    # name: name of user (required)
    # email: email of user (required)
    # year: birth year (required, must be between 1900 and 2000, inclusive)
    # color: their favorite color (required and must be one of “red”, “green”, “orange”, “blue”)

    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    return jsonify(name=name, email=email, year=year, color=color)
    
    # start_curr = request.form["converting-from"].upper()
    # end_curr = request.form["converting-to"].upper()
    # amount = request.form["amount"]
    # errs = []

    # if amount is None:
    #     errs.append('"Not a valid amount.", "error"')
        
    # if not currency.check_currency_code(start_curr):
    #     errs.append(f"Not a valid code: {start_curr}")

    # if not currency.check_currency_code(end_curr):
    #     errs.append(f"Not a valid code: {end_curr}")


    # if not errs:
    #     result = currency.convert(start_curr, end_curr, amount)
    #     if result is None:
    #         errs.append("Conversion failed.")
        
        
    # if errs:
    #     for err in errs:
    #         flash(err)
    #     return render_template("index.html",
    #                            start_curr=start_curr,
    #                            end_curr=end_curr,
    #                            amount=amount or "")

    # else:
    #     return render_template("response.html", result=f"{result}")  