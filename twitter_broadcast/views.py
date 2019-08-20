from django.shortcuts import render
from twitter_broadcast import twitter_reader as twt
from portfolio import settings as ls
from twitter_broadcast.tweet import *


# Create your views here.
def twitter_broadcast(request):
    twitter = twt.Twitter(ls.TWITTER_CREDENTIALS['consumerKey'],
                          ls.TWITTER_CREDENTIALS['consumerSecret'],
                          ls.TWITTER_CREDENTIALS['accessTokenKey'],
                          ls.TWITTER_CREDENTIALS['accessTokenSecret'])

    q = twitter.getUserTimeline('epsilonkeewee')
    tweets = []
    for item in q.get_iterator():
        print(item['user']['screen_name'], item)
        tweets.append(Tweet(item))

    return render(request, 'twitter_broadcast/index.html', {'tweets': tweets})
