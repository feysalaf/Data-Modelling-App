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
# TODO: generalize
def generate_data():
    #declare data container(list)
    datalist = []
    # print(datalist[0])
    for i in range(0,10):
        print(i)
        #index new data to
        #to ith element in
        #the list + add dict to that entry
        datalist.append({"x":i,"y":2*i**2})
    print(datalist)



generate_data()
sb.set(rc={"figure.figsize": (8, 4)}); np.random.seed(0)
x = np.random.randn(100)
ax = sb.displot(x)
plt.show()
