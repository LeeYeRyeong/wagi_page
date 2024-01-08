from django.db import models

class People:
    user_name = models.CharField(max_length=10)
    use_bio = models.CharField(max_length=20)
    user_image = models.ImageField()
    user_portfolio = models.URLField(max_length=200)
    generation_number = models.IntegerField()

# Create your models here.
