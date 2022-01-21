from icalendar import Calendar, Event
from datetime import datetime
from pytz import UTC # timezone
from datetime import date
# Returns the current local date
todayDate=date.today()
todayMonth=str(todayDate)
todayMonth=todayMonth[5:7]
todayDay=str(todayDate)
todayDay=todayDay[8:]
file1 = open('C:/Users/agupta-22/Magic-Mirror/games.txt', 'w')
def findGame(textFile) :
    g = open(textFile,'rb')
    gcal = Calendar.from_ical(g.read())
    for component in gcal.walk():
        if component.name == "VEVENT":
            startTime=component.get('DTSTART').to_ical()
            startTimeString = startTime.decode('utf-8')
            startTimeString1=startTimeString[4:6]
            startTimeString2=startTimeString[6:8]
            if startTimeString1 == todayMonth and startTimeString2 == todayDay:
                menu=component.get('summary')
                menu2=component.get('location')   
                
                if menu != None and menu2 != None:
                    file1.write(menu)
                    file1.write('\n')
                    
                    file1.write(menu2)
                    file1.write('\n')
                elif menu!= None:
                    file1.write(menu)
                    file1.write('\n')
                    file1.write('')
            else:
                menu=''
                file1.write(menu)
    g.close()
findGame('team_155_gmt.ics')
findGame('team_156_gmt.ics')
findGame('team_157_gmt.ics')
findGame('team_158_gmt.ics')
findGame('team_159_gmt.ics')
findGame('team_160_gmt.ics')
findGame('team_161_gmt.ics')
findGame('team_162_gmt.ics')
findGame('team_163_gmt.ics')
findGame('team_164_gmt.ics')
findGame('team_165_gmt.ics')
findGame('team_166_gmt.ics')
findGame('team_167_gmt.ics')
findGame('team_168_gmt.ics')
findGame('team_169_gmt.ics')
findGame('team_171_gmt.ics')
findGame('team_172_gmt.ics')
findGame('team_173_gmt.ics')
findGame('team_175_gmt.ics')
findGame('team_176_gmt.ics')
findGame('team_177_gmt.ics')
findGame('team_178_gmt.ics')
findGame('team_180_gmt.ics')
findGame('team_181_gmt.ics')
findGame('team_182_gmt.ics')
findGame('team_183_gmt.ics')
findGame('team_184_gmt.ics')
findGame('team_185_gmt.ics')
findGame('team_186_gmt.ics')
findGame('team_187_gmt.ics')
findGame('team_189_gmt.ics')
findGame('team_190_gmt.ics')
findGame('team_192_gmt.ics')
findGame('team_194_gmt.ics')
file1.close()
