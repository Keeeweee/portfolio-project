from django.db import models


# Create your models here.
class Player(models.Model):
    name = models.CharField(max_length=800)
    image = models.ImageField(upload_to='images/frasometre/players', null=True, blank=True)

    def __str__(self):
        return self.name


class Game(models.Model):
    image = models.ImageField(upload_to='images/frasometre/games', null=True, blank=True)
    title = models.TextField()
    summary = models.TextField()
    date = models.DateField()
    players = models.ManyToManyField(Player, null=True, blank=True)

    def __str__(self):
        return self.title


class Phrase(models.Model):
    phrase = models.TextField()
    time = models.DateTimeField()
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    players = models.ManyToManyField(Player)

    def joinedPlayerNames(self):
        return (', ').join(self.players.values().values_list('name', flat=True))
