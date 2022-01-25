from bs4 import BeautifulSoup
from datetime import datetime

file = open("C:/Users/agupta-22/Magic-Mirror/schedule.txt", "w")
weekday=datetime.today().strftime('%A')

time = datetime.now().strftime("%H:%M")
time2 = datetime.now().strftime("%I:%M")
headings=[]
if(time<="12:00"):
     headings= (time)
     headings=headings.replace('0','')
     file.write(headings + ' AM   ')                                      
     file.write('Current Block: ')
     print(time)
elif(time>'12:00'):
     headings= (time2)
     headings=headings.replace('0','')
     file.write(headings + ' PM \n')
     file.write('Current Block: ')
     print(time2)
if(time >= "8:00" and time <="8:50" and weekday == "Monday"):
  file.write("A")
elif(time >= "9:00" and time <="10:15" and weekday == "Monday"):
     file.write("B")
elif(time >= "10:25" and time <="11:25" and weekday == "Monday"):
     file.write("C")
elif(time >= "11:25" and time <="12:15"and weekday == "Monday"):
     file.write("Chapel")
elif(time > "12:15" and time <="12:55" and weekday == "Monday"):
     file.write("Lunch")
elif(time > "12:55" and time <="14:10" and weekday == "Monday"):
     file.write("D")
elif(time >= "14:20" and time <="15:10" and weekday == "Monday"):
     file.write("E")

if(time >= "8:00" and time <="8:50" and weekday == "Tuesday"):
     file.write("F")
elif(time >= "9:00" and time <="10:15" and weekday == "Tuesday"):
     file.write("G")
    
elif(time >= "10:25" and time <="11:25" and weekday == "Tuesday"):
     file.write("A")
elif(time >= "11:25" and time <="12:15"and weekday == "Tuesday"):
     file.write("DMX")
elif(time > "12:15" and time <="13:20" and weekday == "Tuesday"):
     file.write("Lunch")
elif(time > "13:20" and time <="14:10" and weekday == "Tuesday"):
     file.write("C")
elif(time >= "14:20" and time <="15:10" and weekday == "Tuesday"):
     file.write("B")

if(time >= "8:00" and time <="8:50" and weekday == "Wednesday"):
     file.write("D")
elif(time >= "9:00" and time <="10:15" and weekday == "Wednesday"):
     file.write("E")
elif(time >= "10:25" and time <="11:25" and weekday == "Wednesday"):
     file.write("G")
elif(time >= "11:25" and time <="12:15"and weekday == "Wednesday"):
     file.write("Community Meeting")
elif(time > "12:15" and time <="12:55" and weekday == "Wednesday"):
     file.write("Lunch")
elif(time > "12:55" and time <="13:45" and weekday == "Wednesday"):
     file.write("F")

if(time >= "8:00" and time <="8:50" and weekday == "Thursday"):
     file.write("B")
elif(time >= "9:00" and time <="10:15" and weekday == "Thursday"):
     file.write("C")
elif(time >= "10:25" and time <="11:15" and weekday == "Thursday"):
     file.write("D")
elif(time >= "11:25" and time <="12:15"and weekday == "Thursday"):
     file.write("DMX")
elif(time > "12:15" and time <="13:20" and weekday == "Thursday"):
     file.write("Lunch")
elif(time > "13:20" and time <="14:10" and weekday == "Thursday"):
     file.write("E")
elif(time >= "14:20" and time <="15:10" and weekday == "Thursday"):
     file.write("A")

if(time >= "8:00" and time <="8:50" and weekday == "Friday"):
     file.write("G")
elif(time >= "9:00" and time <="10:15" and weekday == "Friday"):
     file.write("F")
elif(time >= "10:25" and time <="11:25" and weekday == "Friday"):
     file.write("B")
elif(time >= "11:25" and time <="12:15"and weekday == "Friday"):
     file.write("Chapel")
elif(time > "12:15" and time <="12:55" and weekday == "Friday"):
     file.write("Lunch")
elif(time > "12:55" and time <="14:10" and weekday == "Friday"):
     file.write("A")
elif(time >= "14:20" and time <="15:10" and weekday == "Friday"):
     file.write("C")


if(time >= "8:00" and time <="8:50" and weekday == "Saturday"):
     file.write("E")
elif(time >= "9:00" and time <="9:50" and weekday == "Saturday"):
     file.write("D")
elif(time >= "10:00" and time <="10:50" and weekday == "Saturday"):
     file.write("F")
elif(time >= "11:00" and time <="11:50"and weekday == "Saturday"):
     file.write("G")

file.close()
