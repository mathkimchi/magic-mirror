import csv
import operator
file1 = open("C:/Users/agupta-22/Magic-Mirror/athletics2.txt", "w")
sample = open('athletics.txt','r')
csv1 = csv.reader(sample,delimiter=',')
sort= sorted(csv1,key=operator.itemgetter(0))

for eachline in sort:
    file1.write(str(eachline))
    file1.write('\n')
file1.close()