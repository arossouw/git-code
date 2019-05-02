import random

class MasterSlaveRouter(object):
    def db_for_read(self, model, **hints):
        return random.choice(('slave1', 'slave2'))

    def db_for_write(self, model, **hints):
        return 'master'
