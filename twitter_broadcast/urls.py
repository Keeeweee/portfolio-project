from django.urls import path
from . import views

urlpatterns = [
    path('', views.twitter_broadcast, name="twitter_broadcast"),
]