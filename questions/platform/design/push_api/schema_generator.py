from csv import DictReader
import MySQLdb

primary_keys = set(['mem_id', 'clm_id'])


class Column(object):
    def __init__(self, field_name, length, field_type):
        self.field_name = field_name
        self.length = length
        self.field_type = field_type


def parse_schema():
    columns = []
    with open('schema.csv') as schema_file:
        reader = DictReader(schema_file)
        for line in reader:
            field_name = line['field_name']
            length = int(line['end']) - int(line['begin']) + 1
            field_type = line['type']
            columns.append(Column(field_name, length, field_type))
    return columns

type_to_sql_type = {
    'string': 'VARCHAR',
    'date': 'DATE',
    'currency': 'DECIMAL'
}


def get_create_table(columns):
    column_defs = []

    for column in columns:
        is_primary_key = column.field_name in primary_keys

        col_format = '{name} {sql_type} {null} {primary_key}'

        name = column.field_name

        sql_type = type_to_sql_type[column.field_type]
        if sql_type == 'VARCHAR':
            sql_type += '(%s)' % column.length
        elif sql_type == 'DATE':
            pass
        elif sql_type == 'DECIMAL':
            sql_type += '(%s,%s)' % (column.length - 1, 2)

        null = '' if not is_primary_key else 'NOT NULL'
        primary_key = ''

        column_defs.append(col_format.format(name=name, sql_type=sql_type, null=null, primary_key=primary_key))

    column_defs.append('PRIMARY KEY (%s)' % (','.join(primary_keys)))

    statement = "CREATE TABLE claims (%s);" % ','.join(column_defs)
    return statement


def main():

    conn = MySQLdb.connect(
        host="localhost",  # your host, usually localhost
        user="root",  # your username
        db="push_service")  # name of the data base

    # you must create a Cursor object. It will let
    #  you execute all the queries you need
    cur = conn.cursor()

    columns = parse_schema()
    sql = get_create_table(columns)
    # Use all the SQL you like
    cur.execute(sql)

if __name__ == '__main__':
    main()
