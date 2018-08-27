from django.db import models


# Create your models here.
class Job(models.Model):
    image = models.ImageField(upload_to='images/')
    summary = models.TextField(default='')
    title = models.TextField(default='')
    company = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.company
