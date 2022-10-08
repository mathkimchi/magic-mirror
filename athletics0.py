import requests

# request all teams calendar data and saves it
for x in range(154,195):
    url = 'https://www.peddie.org/calendar/team_'+str(x)+'.ics' #get url name
    r = requests.get(url, allow_redirects=True)                 #get file at url
    open('Calendars\\team_'+str(x)+'_gmt.ics', 'wb').write(r.content)      #save file

print(__file__) #print after program is run (for debugging in webmin)