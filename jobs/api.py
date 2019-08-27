from django.http import JsonResponse
from django.core import serializers

from jobs.serializers import JobSerializer
from .models import Job


def allJobs(request):
    jobs = Job.objects.all()
    return JsonResponse(JobSerializer(jobs, many=True).data, safe=False)


def job(request, job_id):
    job = Job.objects.get(pk=job_id)
    return JsonResponse(JobSerializer(job).data, safe=False)
