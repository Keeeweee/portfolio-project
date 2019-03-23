from django.urls import path
from . import views

urlpatterns = [
    path('', views.smart_rockets, name="smart-rockets"),
]