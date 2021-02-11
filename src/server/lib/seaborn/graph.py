import matplotlib.pyplot as plt
import seaborn as sb, numpy as np
from seaborn import lineplot
import pandas as pd
from IPython.display import display
#
# sb.set_theme(style="darkgrid", palette='deep')
sb.set_style(style="darkgrid" )

sb.set(font="Gentium")
sb.color_palette("crest", as_cmap=True)
# sb.set_style({'axes.grid' : True})

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

palette = sb.color_palette("mako_r", 2)
#generate data
#data architecture
# list  = [
#           {"x":<value>,
#            "y":<value>},
#           {"x":<value>,
#            "y":<value>},
#                 .
#                 .
#                 .
#                 n
#         ]
#
# TODO: work for negative values
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
data = pd.DataFrame(datalist)
data2 = pd.DataFrame(datalist2)

#append data2 y to data
data['y_1'] = pd.Series(data2['y'])
print(data.head(10))

#melting data2
data = data.melt('x', var_name='Values',  value_name='values')
#TODO graph the functions from data
lineplot(x="x", y="values", hue='Values', data=data,palette=palette)
# lineplot(x='x',y='y',data=data,markers=True)
plt.show()



# sb.set(rc={"figure.figsize": (8, 4)}); np.random.seed(0)
# x = np.random.randn(100)
# ax = sb.displot(x)
# plt.show()
