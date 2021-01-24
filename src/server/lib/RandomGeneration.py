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
