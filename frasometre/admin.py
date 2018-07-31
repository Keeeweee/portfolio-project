from django.contrib import admin
from .models import Game
from .models import Player
from .models import Phrase

# Register your models here.
#admin.site.register(Game)
admin.site.register(Player)
admin.site.register(Phrase)


class PhraseAdminInline(admin.TabularInline):
    model = Phrase

class GameAdmin(admin.ModelAdmin):
    inlines = (PhraseAdminInline, )


admin.site.register(Game, GameAdmin)
