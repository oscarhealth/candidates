import datetime
from decimal import Decimal
import MySQLdb
from schema_generator import parse_schema, primary_keys


# TODO: make this function work!
def send_msg(mem_id, claim_id, date, amount, claim_status):
    """
    Send a push notification about a claim
    """
    print "Send a push to %s" % mem_id


def get_device_ids():
    """
    Returns a dictionary of {mem_id: installation_id}
    """
    select_cmd = 'SELECT mem_id, installation_id FROM member_device'

    conn = MySQLdb.connect(
        host="localhost",  # your host, usually localhost
        user="root",  # your username
        db="push_service")  # name of the data base

    cur = conn.cursor()
    cur.execute(select_cmd)

    results = {}
    for row in cur.fetchall():
        results[row[0]] = int(row[1])

    return results


def insert_statement_for_line(columns, primary_key_list, line):

    values = []
    idx = 0
    for column in columns:
        value = line[idx:idx + column.length]
        idx += column.length

        if column.field_type == 'string':
            pass
        elif column.field_type == 'date':
            year = value[:4]
            month = value[4:6]
            day = value[6:8]
            value = datetime.date(month=int(month), day=int(day), year=int(year)).isoformat()
        elif column.field_type == 'currency':
            _ = Decimal(value)
            value = value.strip()

        values.append(value)

    all_columns = [column.field_name for column in columns]
    col_updates = ','.join('%s = VALUES(%s)' % (col, col) for col in all_columns if col not in primary_key_list)

    insert_statement = 'INSERT INTO claims ({all_columns}) VALUES ({col_values}) ON DUPLICATE KEY UPDATE {col_updates};'

    send_msg(*values)

    return insert_statement.format(
        all_columns=','.join(all_columns),
        col_values=','.join("'%s'" % val for val in values),
        col_updates=col_updates
    )


def load(columns, primary_key_list, filename):

    conn = MySQLdb.connect(
        host="localhost",  # your host, usually localhost
        user="root",  # your username
        db="push_service")  # name of the data base

    # you must create a Cursor object. It will let
    #  you execute all the queries you need
    cur = conn.cursor()

    # Use all the SQL you like
    with open(filename) as data_file:
        for line in data_file.readlines():
            statement = insert_statement_for_line(columns, primary_key_list, line)
            # print statement
            cur.execute(statement)
    conn.commit()

if __name__ == '__main__':
    column_list = parse_schema()
    load(column_list, primary_keys, 'test_data/clm_data.dat')
