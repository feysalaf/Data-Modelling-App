from lib.imports.server_imports import *
#importing user libraries
from lib.exponential.module import *
from lib.RandomGeneration import *

#base initialization
app = Flask(__name__,template_folder ='templates/')
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
#instantiating the socket io object
socketio = SocketIO(app)



######################################################
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


################################################### 


@app.route("/display/",methods=['GET','POST'])
#call iterator


#random_gen method just sitting without decorator

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


def start_server():
    socketio.run(app,debug=True)



if __name__ == '__main__':
    start_server()
