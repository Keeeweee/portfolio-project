from django.urls import path
from . import views

urlpatterns = [
    path('', views.expsum, name="expsums"),
]