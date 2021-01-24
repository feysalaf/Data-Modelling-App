import webview
import time
from contextlib import redirect_stdout
from io import StringIO
from subprocess import call
import subprocess

if __name__ == '__main__':
    
    #socket_server.start_server()
 
    time.sleep(4)
    stream = StringIO()
    with redirect_stdout(stream):
        window = webview.create_window('M','http://127.0.0.1:5000',width=1400, height=890,resizable=True,frameless=True )
        webview.start()
 

# def change_title(window):
#   window.change_title('Hello World')


# window = webview.create_window('Hello World','http://127.0.0.1:5000',width=1390, height=850,frameless=True)

# webview.start(window)
 
