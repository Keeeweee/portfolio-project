import datetime
from django.shortcuts import render


def expsum(request):
    now = datetime.datetime.now()

    return render(request, 'expsum/expsum.html', {'day': now.day, 'month': now.month, 'year': now.year % 100})
