with open("01Calories.txt") as f:
    lines = f.readlines()
    total = 0
    elves = []
    for line in lines:
        if line.rstrip("\n"):
            total+=int(line)
        else:
            elves.append(total)
            total = 0

print(max(elves))

elves.sort()
elves.reverse()
print(elves[0] + elves[1] + elves[2])
