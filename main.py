from bs4 import BeautifulSoup
import requests 
import time

#while(True):
file1 = open('peddiemenu.txt', 'w')
file2 = open('peddiescore.txt', 'w')

#get data
data = requests.get("https://www.peddie.org/athletics/traditions/blair-rivalry/peddie-blair-day-2021")

#load data into bs4
soup = BeautifulSoup(data.text, 'html.parser')


menu2 = soup.find('div', {'class':'fsAthleticsRecap'}).get_text()
print(menu2)
file1.write(str(menu2))
file1.close()

    #time.sleep(7200) 


#menu2 = menu.find('div', {'class':'fsDescription'})
#for ul in menu2.find('ul'):
#    menu3 = ul.find_all('li').text.strip()
#    print(menu3)



#menu2 = menu.find('div', {'class':'fsEventDetails'})



#print(menu)