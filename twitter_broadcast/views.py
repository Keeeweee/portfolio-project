from django.shortcuts import render
from twitter_broadcast import twitter_reader as twt
from portfolio import local_settings as ls
from twitter_broadcast.tweet import *


# Create your views here.
def twitter_broadcast(request):
    twitter = twt.Twitter(ls.consumerKey, ls.consumerSecret, ls.accessTokenKey, ls.accessTokenSecret)

    q = twitter.getUserTimeline('epsilonkeewee')
    tweets = []
    for item in q.get_iterator():
        print(item['user']['screen_name'], item)
        tweets.append(Tweet(item))

    return render(request, 'twitter_broadcast/index.html', {'tweets': tweets})
