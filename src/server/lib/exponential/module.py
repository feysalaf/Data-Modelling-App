from random import randrange

def execute_additions():
    var_1 = randrange(10)
    var_2 = randrange(20)
    return_value = var_1 + var_2
    out_to_js_json = {'output_1':str(return_value)}
    return out_to_js_json
