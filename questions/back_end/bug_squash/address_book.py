import csv


def parse_directory(input_file):
    """
    Parses a directory csv file and returns a collection of contact dictionaries
    @param input_file:
    @return:
    """
    contacts = []
    f = open(input_file, 'r')
    csv_reader = csv.DictReader(f)
    for line in csv_reader:
        contacts.append(line)
    return contacts


def print_directory(contacts):
    """
    Prints contacts in the format:
     Name (age)
        address: full address
        phone: cell phone if exists otherwise home phone
        email: email address
    @param contacts:
    @return:
    """
    pass

print_directory(parse_directory('test_data/directory.csv'))
