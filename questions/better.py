import datetime

def loadPeopleData():
	raw_people_data = [
		("Sue", (1950,1,1)),
		("Greg", (1952,6,1)),
		("Sarah", (1982,1,1)),
		("Mike", (1979,1,1)),
	]
	to_return = []
	for person in raw_people_data:
		name = person[0]
		date_tuple = person[1]
		birth_date = datetime.date(date_tuple[0], date_tuple[1], date_tuple[2])
		to_return.append({
			"name":name,
			"birth_date":birth_date
			})
	return to_return


def sortPeopleList(people_data):
	people_data.sort(key=lambda x: x["birth_date"])
	return people_data

def getMostSimilarlyAgedPeople(sorted_people_data):
	least_difference = -1
	least_personA = None
	least_personB = None
	for i in range(len(sorted_people_data)):
		first_index = i
		second_index = i+1
		if second_index < len(sorted_people_data):
			personA = sorted_people_data[first_index]
			personB = sorted_people_data[second_index]
			time_difference = personB["birth_date"] - personA["birth_date"]
			if least_difference == -1 or (time_difference < least_difference):
				time_difference = least_difference
				least_personA = personA
				least_personB = personB
	return (leastPersonA, leastPersonB)


if __name__ == "__main__":
	people_data = loadPeopleData()
	sorted_people_data = sortPeopleList(people_data)
	print sorted_people_data



