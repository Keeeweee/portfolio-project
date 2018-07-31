from django.urls import path
from . import views

urlpatterns = [
    path('', views.allgames, name="allgames"),
    path('game/<int:game_id>/', views.game, name="game"),
]