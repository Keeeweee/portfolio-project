from django.urls import path
from . import views

urlpatterns = [
    path('', views.expsum, name="expsums"),
    path('<int:year>/<int:month>/<int:day>/', views.expsum, name="expsums"),
]