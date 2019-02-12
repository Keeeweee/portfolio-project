from django.shortcuts import render
from twitter_broadcast import twitter_reader as twt
from portfolio import local_settings as ls


# Create your views here.
def twitter_broadcast(request):
    # consumerKey = request.session.get('consumerKey')
    # print('Consumer Key is: ' + consumerKey)
    # consumerSecret = request.session.get('consumerSecret')
    # accessTokenKey = request.session.get('accessTokenKey')
    # accessTokenSecret = request.session.get('accessTokenSecret')
    twitter = twt.Twitter(ls.consumerKey, ls.consumerSecret, ls.accessTokenKey, ls.accessTokenSecret)

    # q = twitter.query('pizza')
    # for item in q.get_iterator():
    #     print(item['user']['screen_name'], item['text'])

    q = twitter.getUserTimeline('epsilonkeewee')
    for item in q.get_iterator():
        print(item['user']['screen_name'], item['text'])

    return render(request, 'twitter_broadcast/index.html')
