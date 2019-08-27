from django.urls import path
from . import views, api

urlpatterns = [
    path('view', views.home, name="alljobsview"),
    path('api/jobs', api.allJobs, name="alljobs"),
    path('api/jobs/<int:job_id>/', api.job, name="job"),
]