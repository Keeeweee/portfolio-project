from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views, api

urlpatterns = [
    path('view', views.home, name="alljobsview"),
    path('api/jobs', api.JobList.as_view()),
    path('api/jobs/<int:pk>/', api.JobDetail.as_view()),
    path('users/', api.UserList.as_view()),
    path('users/<int:pk>/', api.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
