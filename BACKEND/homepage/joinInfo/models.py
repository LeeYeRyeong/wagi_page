from django.db import models

class JoinInfo(models.Model):
    user_name = models.CharField(max_length=15)
    user_number = models.IntegerField()
    user_major = models.CharField(max_length=30)
    user_phone_number = models.IntegerField()
    user_file=models.FileField(upload_to="applications/", null=True, blank=False)

# Create your models here.