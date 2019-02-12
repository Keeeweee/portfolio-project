import re


class Tweet:
    def __init__(self, tweet):
        text = tweet['text']
        if text.startswith('RT @'):
            splitText = text.split(':', 1)
            self.header = splitText[0] + ':'
            self.text = splitText[1]
        else:
            self.header = None
            self.text = text

        self.replaceUrlsInText()

    def replaceUrlsInText(self):
        # findall() has been used
        # with valid conditions for urls in string
        urls = re.findall('(?:(?:https?|ftp)://)?[\w/-?=%.]+\.[\w/-?=%.]+', self.text)
        for url in urls:
            self.text = self.text.replace(url, '<a href=' + url + '>' + url + '</a>')
