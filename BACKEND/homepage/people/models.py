from django.db import models

class People(models.Model):
    user_name = models.CharField(max_length=10)
    user_bio = models.CharField(max_length=20)
    user_image = models.ImageField(upload_to='person/')
    user_portfolio1 = models.URLField(max_length=200, default='')
    user_portfolio2 = models.URLField(max_length=200, default='')
    generation_number = models.IntegerField()

# Create your models here.
