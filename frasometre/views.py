from django.shortcuts import render, get_object_or_404

from .models import Game


# Create your views here.
def allgames(request):
    games = Game.objects
    return render(request, 'frasometre/allgames.html', {'games': games})


def game(request, game_id):
    game = get_object_or_404(Game, pk=game_id)
    return render(request, 'frasometre/game.html', {'game': game})
