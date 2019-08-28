from rest_framework import generics
from jobs.permissions import IsAdminUserOrReadOnly

from jobs.serializers import JobSerializer, UserSerializer
from .models import Job

from django.contrib.auth.models import User


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class JobList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUserOrReadOnly]
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUserOrReadOnly]
    queryset = Job.objects.all()
    serializer_class = JobSerializer
