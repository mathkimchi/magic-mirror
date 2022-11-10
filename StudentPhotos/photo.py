from bs4 import BeautifulSoup
# import requests 
# import time


# #get data
# data = requests.get('https://www.peddie.org/our-community/peddie-am-20')

# #load data into bs4
# soup = BeautifulSoup(data.text, 'html.parser')

# photo = "https:" + str(soup.find('div', {'id':'fsEl_35849'}).find('picture'))
# menu2 = soup.find('div', {'class':'fsDescription'}).get_text("\n")

# file1 = open('menu.txt', 'w')
# #file1.write(photo)
# print(soup.find('div', {'id':'fsEl_35849'}))
# file1.close()

from selenium import webdriver
browser = webdriver.Firefox()
browser.get("http://www.yoursite.com")
soup = BeautifulSoup(browser.page_source, "html.parser")