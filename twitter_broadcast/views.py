from django.shortcuts import render


# Create your views here.
def twitter_broadcast(request):
    return render(request, 'twitter_broadcast/index.html')