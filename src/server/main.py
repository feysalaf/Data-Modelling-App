from flask import Flask, jsonify, render_template, request
import math
import os
import time
#module imports
from random import randrange

app = Flask(__name__,template_folder ='templates/')

 
#@app.route("/api/calc",methods=['GET','POST'])
# def add():
#     a = int(request.args.get('a', 0))
#     b = int(request.args.get('b', 0))
#     div = 'na'
#     if b != 0:
#         div = a/b
#     return jsonify({
#         "a"        :  a,
#         "b"        :  b,
#         "add"      :  a+b,
         
#     })
 
@app.route("/display/",methods=['GET','POST'])
def iterator():
    my_strings = "hello worlds"
    for i in range(1000):
        random_var = randrange(1000)
        time.sleep(4)
 
        return jsonify({
            "add" : random_var,
        })

    #return render_template("index.html",value_4 = my_strings)


@app.route("/subprocess",methods=['GET','POST'])
def add():
    #a = int(request.args.get('a', 0))
    #b = int(request.args.get('b', 0))
    a = 10
    b = 20
    random_variable = randrange(10)
    
    return jsonify({
        "add"      :  random_variable,
         }) 


@app.route("/",methods=['GET','POST'])
def render_output(): 
    my_string = "hello worlds"
    val_2 = "Second variable"
    val_3 = "Third variable"
    return render_template("index.html", value_1=my_string, value_2 = val_2,value_3 = val_3 )
     
if __name__ == "__main__":
    app.run(debug=True)
