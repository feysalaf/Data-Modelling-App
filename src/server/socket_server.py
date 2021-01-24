from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, send
import math
import os
import time
#module imports
from random import randrange
import json
import webview
from subprocess import call
from threading import Timer
import subprocess
import threading
import sys
#importing user libraries
from Lib.Exponential.module import *


app = Flask(__name__,template_folder ='templates/')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
#instantiating the socket io object
socketio = SocketIO(app)

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


########### RECEIVE FROM JS INCOMING #################


@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)

@socketio.on('module_trigger')
def handle_module_trigger(jsons, methods=['GET','POST']):
    print('Trigger successfully executed')
    print(str(jsons))
    random_gen()

@socketio.on('chart_1_trigger')
def send_module_data_to_chart(jsons, methods=['GET','POST']):
    print('Chart_1_trigger executed')
    print(str(json))

@socketio.on('receive_from_js')
def execute_backend_addition(jsons, methods=['GET','POST']):
    send_bulk_json_out()

########### BACKEND METHODS #################

# def execute_addition():
#     var_1 = randrange(10 )
#     var_2 = randrange(20 )
#     return_value = var_1 + var_2
#     out_to_js_json = {'output_1':str(return_value)}
#     return out_to_js_json
def send_bulk_json_out():
    returned_json = execute_additions()
    socketio.emit('send_to_js',(returned_json))


###################################################################################



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
     for i in range(1000):
        random_var = randrange(1000)
        time.sleep(4)

        return jsonify({
            "add" : random_var,
        })

    #return render_template("index.html",value_4 = my_strings)

def random_gen():
    for i in range(1000):
            random_var_1 = randrange(1000)
            random_var_2 = randrange(100)
            random_var_3 = randrange(10)

            time.sleep(2)
            out = {'output_1' : str(random_var_1),'output_2' : str(random_var_2),'output_3': str(random_var_3)}
            print(out)
            socketio.emit('module_trigger_stream',(out))


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



# def call_frameless_window():
#     call(["python3", "frameless_window.py"])

# def call_frameless_window_via_terminal():
#     subprocess.run(["python3" ,"frameless_window.py"])
def start_server():
    socketio.run(app,debug=True)





if __name__ == '__main__':
    start_server()
