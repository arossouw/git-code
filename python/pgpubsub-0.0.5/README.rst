========
pgpubsub
========

pgpubsub provides convenient access to the `event notification system`_ built
into the PostgreSQL_ database.  This provides a real-time Pub/Sub system similar
to the one in Redis_.

Usage
=====

First you need to make a connection::

    import pgpubsub
    pubsub = pgpubsub.connect(user='postgres', database='test')

The arguments accepted by the pgpubsub.connect() function are identical to those
supported by the `psycopg2.connect()`_ function.

Sending Events
--------------

To send an event, use the pubsub.notify() method::

    pubsub.notify('test_channel', 'some message')

Receiving Events
----------------

To receive events, you must first subscribe to a specific channel with the
pubsub.listen() method::

    pubsub.listen('test')

You can call pubsub.listen() multiple times to receive events from multiple
channels::

    pubsub.listen('chan1')
    pubsub.listen('chan2')

Note that channel names must be a valid `SQL identifiers`_.  To quote from the
Postgres docs:

    SQL identifiers and key words must begin with a letter (a-z, but also letters
    with diacritical marks and non-Latin letters) or an underscore (_). Subsequent
    characters in an identifier or key word can be letters, underscores, digits
    (0-9), or dollar signs ($).

WARNING
~~~~~~~

Because channels are SQL identifiers rather than strings, they can't be
quoted/escaped by Psycopg2 like strings can.  It is not safe to build a channel
name from untrusted user input.

DO NOT DO THIS::

    channel = 'events_' + username
    pubsub.listen(channel)

If you do, then your whole database could be destroyed by someone with the
username "; DROP TABLE users;".  `Mandatory XKCD`_.

Once you have subscribed to one or more channels, you can choose to receive
events either by iterating over pubsub.events(), or by repeatedly calling the
pubsub.get_event() method.

pubsub.events()
~~~~~~~~~~~~~~~

This is a generator over the stream of events coming on the pubsub.  It lets you
loop over the events just as you would a list::

    for e in pubsub.events():
        print e.payload

Behind the scenes, the pubsub is blocking on the standard library's
select.select_ function.  You can provide two additional arguments to
pubsub.events() to control how timeouts are handled when waiting on
select.select:

- select_timeout: The number of seconds to wait on select.select before giving
  up and trying again.  Defaults to 5.
- yield_timeouts: This defaults to False.  If set to True, then pubsub.events()
  will yield a None each time you go for select_timeout seconds before receiving
  an event.  This is useful for things like WebSockets where you may want to
  send a keepalive message even if no new data has been received::

    for e in pubsub.events(yield_timeouts=True):
        if e is None:
            send_websocket_ping()
        else:
            send_websocket_message(e.payload)

pubsub.get_event()
~~~~~~~~~~~~~~~~~~

This method always returns immediately.  If an event has been received, it will
return that event.  If no event has been received, it will return None.

If multiple events have been received and are waiting in the queue, then
repeated get_event() calls will keep returning the next event until there aren't
any left and it returns None::

    >>> pubsub.listen('test')
    >>> pubsub.get_event() # Nothing delivered yet, so returns None
    >>> pubsub.notify('test', 'message 1')
    >>> pubsub.notify('test', 'message 2')
    >>> pubsub.get_event()
    Notify(9425, 'test', 'message 1')
    >>> pubsub.get_event()
    Notify(9425, 'test', 'message 2')
    >>> pubsub.get_event() # No more messages, so returns None

The pubsub.get_event() method is intended for integration into event loops where
blocking on pubsub.events() would cause problems.

Unsubscribing
-------------

If you want to stop receiving events on one of the channels you're currently
subscribed to, you can call pubsub.unlisten()::

    pubsub.unlisten('channel2')

Event objects
-------------

The event objects returned by pubsub.events() and pubsub.get_event() are
instances of psycopg2's `Notify class`_.  They have three possibly-interesting
attributes:

- payload: A string containing the actual message.
- channel: The name of the channel to which the event was sent.
- pid: The pid of the process on the Postgres server that's handling the
  sender's connection.  This can be useful to prevent an endless loop in a
  program that both sends and receives events::

    my_pid = pubsub.conn.get_backend_pid()
    pubsub.listen('echo')
    for e in pubsub.events():
        sender_pid = e.pid
        if sender_pid != my_pid:
            pubsub.notify('echo', e.payload)

Q & A
=====

**Is it safe to pass pubsub objects between threads?**

No.

**Why use the verbs 'notify' and 'listen' instead of 'publish' and
'subscribe'?**

The methods in pgpubsub are designed to look as much as possible like the actual
SQL commands in Postgres, which are NOTIFY_ and LISTEN_.  The Postgres docs also
refer to 'notification events' rather than 'messages', so pgpubsub uses the same
term.

**Why is there no callback-style interface?**

Someday there might be, if there's demand for it and a well-reasoned spec.

.. _event notification system: http://www.postgresql.org/docs/9.4/static/sql-notify.html
.. _PostgreSQL:  http://www.postgresql.org/
.. _Redis: http://redis.io/topics/pubsub
.. _psycopg2.connect(): http://initd.org/psycopg/docs/module.html#psycopg2.connect
.. _SQL identifiers: http://www.postgresql.org/docs/9.4/static/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
.. _Mandatory XKCD: https://xkcd.com/327/
.. _select.select: https://docs.python.org/2/library/select.html#select.select
.. _Notify class: http://initd.org/psycopg/docs/extensions.html?highlight=notify#psycopg2.extensions.Notify
.. _NOTIFY: http://www.postgresql.org/docs/9.4/static/sql-notify.html
.. _LISTEN: http://www.postgresql.org/docs/9.4/static/sql-listen.html
