from bs4 import BeautifulSoup
import requests 
import time

#while(True):
file1 = open('peddiemenu.txt', 'w')
file2 = open('/peddiescore.txt', 'w')

#get data
data = requests.get('https://peddie-day.herokuapp.com')

#load data into bs4
soup = BeautifulSoup(data.text, 'html.parser')

menu = soup.find('div', {'class':'text-center'})
menu2 = soup.find('div', {'class':'text-center'}).get_text("\n")

print(menu2 + '\n')
file1.write(menu2)
file1.close()

    #time.sleep(7200) 


#menu2 = menu.find('div', {'class':'fsDescription'})
#for ul in menu2.find('ul'):
#    menu3 = ul.find_all('li').text.strip()
#    print(menu3)



#menu2 = menu.find('div', {'class':'fsEventDetails'})



#print(menu)