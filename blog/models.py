from django.db import models


# Create your models here.
class Blog(models.Model):
    title = models.TextField()
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

    def summary(self):
        return self.body.split('. ')[0] + '.'

    def pub_date_pretty(self):
        return self.pub_date.strftime('%e %b %Y')
