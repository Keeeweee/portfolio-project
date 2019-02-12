import TwitterAPI as twt


class Twitter():
    def __init__(self, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret):
        self.api = self.authenticate(consumerKey, consumerSecret, accessTokenKey, accessTokenSecret)

    def authenticate(self, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret):
        api = twt.TwitterAPI(consumerKey, consumerSecret, accessTokenKey, accessTokenSecret)

        return api

    def query(self, query):
        return self.api.request('search/tweets', {'q': query})

    def getUserTimeline(self, userName):
        return self.api.request('statuses/user_timeline', {'screen_name': userName})
