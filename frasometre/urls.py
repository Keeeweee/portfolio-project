from django.urls import path
from . import views

urlpatterns = [
    path('', views.allGames, name="allgames"),
    path('game/<int:game_id>/', views.game, name="game"),
]