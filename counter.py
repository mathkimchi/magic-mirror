from datetime import datetime

file = open("counter.txt", "w")
weekday = datetime.today().strftime("%A")

time = datetime.now().strftime("%H:%M")
count= 110
if time == "24:00":
 count2=count-1
 count2 = str(count2)
 file.write(count2 +' Days Left!')
 count=count-1
elif time != "24:00":
 count2=count
 count2 = str(count2)
 file.write(count2 +' Days Left!')
 if count == 0:
     count=365

 