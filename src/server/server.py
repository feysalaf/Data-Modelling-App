from lib.imports.server_imports import *
#importing user libraries
from lib.exponential.module import *
from lib.RandomGeneration import *



#base initialization
app = Flask(__name__,template_folder ='templates/')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
CORS(app)
#instantiating the socket io object
socketio = SocketIO(app,cors_allowed_origins=['http://localhost:4200'],async_mode='threading')

#whenever page is load
#user is directed to the
#home page
@app.route("/",methods=['GET','POST'])
def showhomepage():
    return render_template("index.html")



##################### API ENDPOINTS #############################

@socketio.on('api endpoint')
def handle_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    # socketio.emit('receivefromserver', json, callback=lambda:print("Message Received."))
    socketio.emit('receivefromserver', json)



def start_server():
    socketio.run(app,debug=True)



if __name__ == '__main__':
    start_server()
