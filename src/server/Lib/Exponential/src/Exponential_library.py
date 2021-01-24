import math
import pandas as pd
import altair as alt
import numpy as np

`
class exponential():
    def __init__(self,list_object):
        self.list_object = list_object
    def get_r_list(self):
        r_list = []
        for i in range(len(self.list_object)-1):
            plus_iteration_variable = i+1
            r_temp                  = self.list_object[plus_iteration_variable]/self.list_object[i]
            r_list.append(r_temp)
        return r_list
    def calculate_r(self):
        r_list_input = self.get_r_list()
        sum_of_r = sum(r_list_input)
        average_r = sum_of_r/len(r_list_input)
        return average_r
    #bypassing this method for now since the dataset is not giving a good list
    def import_dataset():
        text_file = open('dataset.dat', "r")
        lines = text_file.read().splitlines(',')
        dataset_list_object = lines[0]
        return dataset_list_object
    	#print(new_list[0])
    def create_graph(self, value_of_a_1,previous_plot, projection_value):
        # In library method, abs 1
        average_r           = self.calculate_r()
        dataset_list_object = self.list_object
        # User provided parameter initialization
        a_1 = value_of_a_1
        #creating the domain for projection value
        previous_cut_off_value = previous_plot
        x_previous_real_values = np.arange(len(dataset_list_object))
        x_projection           = np.arange(previous_cut_off_value-1,previous_cut_off_value+projection_value)
        y_real_values          = np.asarray(dataset_list_object)

        real_value_plot = pd.DataFrame({
        'Number of days': x_previous_real_values,
        #'f(x)':
        'Number of cases': y_real_values
        })
        projected_value_plot = pd.DataFrame({
        'Number of days': x_projection,
        #'f(x)':
        'Number of cases': (a_1*np.power(average_r,x_projection-1))
        })
        projected_plot = alt.Chart(projected_value_plot).mark_line(strokeDash=[7,2.4],color='Red',point=False).encode(x='Number of days',y='Number of cases')
        real_plot= alt.Chart(real_value_plot).mark_line(color='Blue',point=False).encode(x='Number of days',y='Number of cases')

        new = alt.layer(projected_plot,real_plot).serve()


list = [6,7,16,19,20,21,28,31,53,187,241,302,461,495,646,784,887,1022,1179,1375,1495,1571]
my_list = exponential(list)
my_list.create_graph(3,1,50)


my_object = exponential()  	#creating the object for the class
my_object(list)		#feeding the list to the object -> input
my_object.create_graph(3,1,50) #call the method that you want
