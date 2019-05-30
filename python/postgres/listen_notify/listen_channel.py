import psycopg2
import sys
import select
import time


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

if select.select([pg_con],[],[],0.5) == ([],[],[]):
   print "Timeout"
else:
   pg_con.poll()
   if pg_con.notifies:
            notify = pg_con.notifies.pop()
            print "Got NOTIFY:", `notify`
            print(notify.payload)
