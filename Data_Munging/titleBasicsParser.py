#import libraries
import pandas as pd
import numpy as np
import os

# set up titlebasics table
titleBasics = pd.read_csv('./input/title.basics.tsv', sep="\t")

# create a modified titlebasics with only movies
movieBasics = titleBasics[titleBasics.titleType == 'movie']

# output movieBasics to a csv
movieBasics.to_csv('out.zip', index=False)


