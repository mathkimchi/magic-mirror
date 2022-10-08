import csv
import operator
file1 = open("athletics2.txt", "w")
sample = open('athletics.txt','r')
csv1 = csv.reader(sample,delimiter=',')
sort= sorted(csv1,key=operator.itemgetter(0))

for eachline in sort:
    file1.write(str(eachline))
    file1.write('\n')
file1.close()

print(__file__) #print after program is run (for debugging in webmin)