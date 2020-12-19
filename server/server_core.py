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
##########################################


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
#instantiating the socket io object
socketio = SocketIO(app)

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


@app.route("/",methods=['GET','POST'])
def render_output():
    return jsonify({'text':'Hello World!'})





##########################################
def start_server():
    socketio.run(app,debug=True)




if __name__ == '__main__':
    start_server()
