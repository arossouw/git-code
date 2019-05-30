import psycopg2
import sys
import time
import uuid

try:
  connection = psycopg2.connect("dbname='lottostar_staging' user='arno' password='1l1k1myb33r'")
except psycopg2.Error as e:
        print "Unable to connect!"
        print e.pgerror
        print e.diag.message_detail
        sys.exit(1)

crs = connection.cursor()  # get the cursor and establish the connection.connection
pg_con = connection
pg_con.set_isolation_level(psycopg2.extensions.ISOLATION_LEVEL_AUTOCOMMIT)
data = []
crs.execute('LISTEN table_update;');
while True:
    uuid_text = uuid.uuid1()
    crs.execute("""SELECT pg_notify('table_update','{}'::text);""".format(uuid_text))
    time.sleep(0.2)
