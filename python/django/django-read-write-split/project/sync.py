import os, time, shutil

from watchdog.observers import Observer
from watchdog.events import LoggingFileSystemEventHandler, FileSystemEventHandler

BASE_DIR = os.path.dirname(__file__)

MASTER_DIR = os.path.join(BASE_DIR, 'master')
MASTER_DB = os.path.join(BASE_DIR, 'master/db.sqlite3')
SLAVE1_DB = os.path.join(BASE_DIR, 'slave1/db.sqlite3')
SLAVE2_DB = os.path.join(BASE_DIR, 'slave2/db.sqlite3')

class EventHandler(FileSystemEventHandler):
    def on_modified(self, event):
        shutil.copyfile(MASTER_DB, SLAVE1_DB)
        shutil.copyfile(MASTER_DB, SLAVE2_DB)

shutil.copyfile(MASTER_DB, SLAVE1_DB)
shutil.copyfile(MASTER_DB, SLAVE2_DB)

observer = Observer()
observer.schedule(LoggingFileSystemEventHandler(), MASTER_DIR)
observer.schedule(EventHandler(), MASTER_DIR)
observer.start()
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
observer.join()
