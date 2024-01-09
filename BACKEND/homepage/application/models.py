from django.db import models

# Create your models here.

class Application(models.Model):
    introduction = models.CharField(max_length=500)
    motivation = models.CharField(max_length=500)
    project_experience = models.CharField(max_length=800)
    study_experience = models.CharField(max_length=700)
    submit_date = models.DateTimeField(auto_now=True)