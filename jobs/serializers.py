from rest_framework import serializers
from django.contrib.auth.models import User

from jobs.models import Job


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'image', 'summary', 'title', 'company', 'start', 'end']
