import matplotlib.pyplot as plt
import seaborn as sb, numpy as np
from seaborn import lineplot
import pandas as pd
from IPython.display import display


class Graph():
    def __init__(self):
        global graph_counter
        graph_counter = 0
        sb.set_style(style="darkgrid" )

        sb.set(font="Gentium")
        sb.color_palette("crest", as_cmap=True)

        #         GRAPH THEME           #
        #to set a theme, simply uncomment it
        # dark
        # textColor:str       = '#BFBAB0'
        # backgroundColor:str = '#1F2430'
        # gridColor:str       = '#6F6F6F'
        # gridOuter:str       = '#1F2430'

        # scientific light
        textColor:str       = '#252223'
        backgroundColor:str = '#EAEAF2'
        gridColor:str       = '#FFFFFF'
        gridOuter:str       = '#EAEAF2'

        sb.set(rc={'axes.facecolor':backgroundColor,
                  'figure.facecolor':backgroundColor,
                  'grid.color':gridColor,
                  'text.color':textColor,
                  'axes.labelcolor':textColor,
                  'axes.edgecolor':gridOuter,
                  'xtick.color':textColor,
                  'ytick.color':textColor})
    #need to pass self for scope context
    def adddata(self,*args):
        global graph_counter
        for g in args:
            if graph_counter == 0:
                graph_counter = graph_counter + 1
                graphname = 'data' + str(graph_counter)
                graphname = pd.DataFrame(g)
                print("Graph # {} initialized".format(graph_counter))
            else:
                #append data after creating
                #first graph
                graph_2 = pd.DataFrame(g)
                graphname['y_'+str(graph_counter)] = pd.Series(graph_2['y'])
                graph_counter = graph_counter + 1
                print("Graph # {} initialized".format(graph_counter))
                print("Final graph is: \n{}".format(graphname))

def generate_data(function:str,ranges:dict):
    #declare data container(list)
    datalist = []
    # print(datalist[0])
    for i in range(ranges['start'],ranges['end']):
        #index new data to
        #to ith element in
        #the list + add dict to that entry
        datalist.append({"x":i,"y":function(i)})
    return datalist


ranges = {"start":-150,"end":151}

#function
def LinearFunction(i):
    return 2 * i ** 2

def ExponentialFunction(i):
    return 32 * i


datalist = generate_data(LinearFunction,ranges)
datalist2 = generate_data(ExponentialFunction,ranges)
datalist3 = generate_data(ExponentialFunction,ranges)

myobj = Graph()
myobj.adddata(datalist,datalist2,datalist3,datalist)
