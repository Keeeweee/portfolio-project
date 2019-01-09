import datetime
from django.shortcuts import render


def expsum(request,
           year=datetime.datetime.now().year,
           month=datetime.datetime.now().month,
           day=datetime.datetime.now().day):
    return render(request, 'expsum/expsum.html', {'day': day, 'month': month, 'year': year})
