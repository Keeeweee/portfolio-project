from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers


from .models import Job


# Create your views here.
def home(request):
    jobs = Job.objects
    return render(request, 'jobs/home.html', {'jobs': jobs})


def jobApi(request):
    return JsonResponse(serializers.serialize("json", Job.objects.all()), safe=False)
