# import calendar
# from bs4 import BeautifulSoup
# import requests 
# import time

# #while(True):
# file1 = open('games2.txt', 'w')
# file2 = open('games2.txt', 'w')

# #get data
# data = requests.get('https://www.peddie.org/athletics/schedules')

# #load data into bs4
# soup = BeautifulSoup(data.text, 'html.parser')
# game1 = soup.find('div', {'class':'fsEventTable fsElementTable'})
# game2 = soup.find('div', {'class':'fsTitle'}).get_text("\n")

# print(game2 + '\n')
# file1.write(game2)
# file2.write(game2)
# file1.close()
# file2.close()
# ---------------------------------------------------------------------------
import requests
from bs4 import BeautifulSoup
import pandas as pd

page = requests.get('https://www.peddie.org/athletics/schedules')

soup = BeautifulSoup(page.text, 'lxml')


table1 = soup.find('table', id='fsEventTable fsElementTable')


headers = []
for i in table1.find_all('th'):
 title = i.text
 headers.append(title)

print(headers)
#  mydata = pd.DataFrame(columns = headers)
#  for j in table1.find_all('tr')[1:]:row_data = j.find_all('t')
# row = [i.text for i in row_data]
# length = len(mydata)
# mydata.loc[length] = row

# mydata.drop(mydata.index[0:7], inplace=True)
# mydata.drop(mydata.index[222:229], inplace=True)
# mydata.reset_index(inplace=True, drop=True)
# mydata.drop('#', inplace=True, axis=1)
# mydata.to_csv('athletics.csv', index=False)
# mydata2 = pd.read_csv('athletics.csv')
# ------------------------------------------------------------