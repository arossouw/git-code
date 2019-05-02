# django-read-write-split
Read write split implementation in Django

# Usage

    $ env/script/activate
    $ cd project
    $ python sync.py &
    $ python manage.py migrate --database=master
    $ python manage.py createsuperuser --database=master
    $ python manage.py runserver
