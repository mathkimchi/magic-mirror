file1 = open("athletics4.txt", "w")
with open('athletics3.txt', 'r') as f:
    cnt = 0
    for line in f:
        if cnt < 17: #cnt < the amount of lines to be displayed
            print(line, end='', file=open("athletics4.txt", "a"))
            cnt += 1
        else:
            break
file1.close()