# importing the libraries
from bs4 import BeautifulSoup
import requests

file1 = open('C:/Users/agupta-22/Magic-Mirror/games2.txt', 'w')
url="https://www.peddie.org/athletics/schedules"

# Make a GET request to fetch the raw HTML content
html_content = requests.get(url).text

# Parse the html content
soup = BeautifulSoup(html_content, "lxml")
headings=[]
headings= soup.table.text.replace('\n', ' ').strip()
headings=headings.replace('Team Opponent Date Time Advantage Details Status', '').strip()
headings=headings.replace('      	 			', '\n').strip()
headings=headings.replace('CANCELLED     	 			', '').strip()
headings=headings.replace('Details', '\n').strip()
headings=headings.replace('      ', '  ').strip()
headings=headings.replace('					 	 			', '').strip()
headings=headings.replace(' Load More', '').strip()
headings=headings.replace('   ', '').strip()
headings=headings.replace('sv', 's  v').strip()
headings=headings.replace('.', '.  ').strip()
headings=headings.replace(' 						 	 			', '  ').strip()
headings=headings.replace('	 			', '  ').strip()
headings=headings.replace(' 							Home', '  (Home)').strip()
headings=headings.replace(' 							Away', '  (Away)').strip()
headings=headings.replace('CHANGED', '\nChanged').strip()
file1.write(headings)
			