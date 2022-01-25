from bs4 import BeautifulSoup
from datetime import datetime

file = open("C:/Users/agupta-22/Magic-Mirror/time.txt", "w")
weekday=datetime.today().strftime('%A')

time = datetime.now().strftime("%H:%M")
file.write(time)