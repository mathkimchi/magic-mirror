file1 = open("C:/Users/agupta-22/Magic-Mirror/athletics4.txt", "w")
with open('athletics3.txt', 'r') as f:
    cnt = 1
    for line in f:
        if cnt <= 16:
            print(line, end='', file=open("athletics4.txt", "a"))
            cnt += 1
        else:
            break
file1.close()