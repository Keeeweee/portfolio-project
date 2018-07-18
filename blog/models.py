from django.db import models


# Create your models here.
class Blog(models.Model):
    title = models.TextField()
    pub_date = models.DateTimeField()
    body = models.TextField()
    image = models.ImageField(upload_to='images/')
