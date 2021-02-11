import matplotlib.pyplot as plt
import seaborn as sns, numpy as np
import pandas as pd

df = pd.read_csv('Pokemon.csv', encoding= 'unicode_escape', index_col=0)
sns.lmplot(x='Attack', y='Defense', data=df, fit_reg=False,hue='Stage')
plt.show()
