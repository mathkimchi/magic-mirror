from icalendar import Calendar, Event
from datetime import datetime
from pytz import UTC  # timezone
from datetime import date
from datetime import datetime
import datetime
from dateutil import relativedelta

# Returns the current local date
todayDate = date.today()  # THIS MONTH
todayMonth = str(todayDate)
todayMonth = todayMonth[5:7]
todayDay = str(todayDate)
todayDay = todayDay[8:]
nextMonth = datetime.date.today() + relativedelta.relativedelta(months=1)  # NEXT MONTH
nextMonth2 = str(nextMonth)
nextMonth2 = nextMonth2[5:7]
nextDay = str(nextMonth)
nextDay = nextDay[8:]
actualDay = date.today().day 
actualDay = str(actualDay)
todayMonth2 = todayDate.strftime("%B")
nextMonth3 = nextMonth.strftime("%B")
file1 = open("athletics.txt", "w")


def findCalendar(textFile):
    g = open("Calendars/"+textFile, "rb")
    gcal = Calendar.from_ical(g.read())

    for component in gcal.walk():
        if component.name == "VEVENT":
            #Check that the event is this or next month
            startTime = component.get("DTSTART").to_ical()
            startTimeString = startTime.decode("utf-8")
            startTimeString1 = startTimeString[4:6]
            startTimeString2 = startTimeString[6:8]
            if (
                startTimeString1 == todayMonth
                and startTimeString2 >= nextDay
                or startTimeString1 == nextMonth2
                
            ):
                #read the summary, location, and home/away and add it to athletics.txt
                menu = component.get("summary")
                menu2 = component.get("location") # never used?
                if menu.find("Away") > 0 or menu.find("Home") > 0: #if the event is labeled home or away, save it
                    #write the date of the event
                    file1.write(startTimeString1)
                    file1.write("/" + startTimeString2 + ',')
                    file1.write(" ")

                    #write the event summary
                    file1.write(menu)
                    file1.write("\n")
                else:
                    menu = ""
                    file1.write(menu)
    g.close()


for x in range(154,195):
    try:
        findCalendar("team_"+str(x)+"_gmt.ics")
    except:
        print("Something went wrong at team_"+str(x)+"_gmt.ics")

file1.close()

print(__file__) #print after program is run (for debugging in webmin)    