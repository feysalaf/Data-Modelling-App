import matplotlib.pyplot as plt
import seaborn as sb, numpy as np


sb.set_theme(style="whitegrid")


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
    print(datalist)



ranges = {"start":0,"end":10}

#function
def LinearFunction(i):
    return 2 * i ** 2

def ExponentialFunction(i):
    return 32 * i

generate_data(LinearFunction,ranges)
generate_data(ExponentialFunction,ranges)



# sb.set(rc={"figure.figsize": (8, 4)}); np.random.seed(0)
# x = np.random.randn(100)
# ax = sb.displot(x)
# plt.show()
