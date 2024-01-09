
from django.db import models

# Create your models here.
class Notion(models.Model):
    CATEGORY_CHOICES = (
        ('정기활동', '정기활동'),
        ('행사', '행사'),
        ('공모전', '공모전'),
    )
    write_time = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    notion_title = models.CharField(max_length=60)
    notion_text = models.CharField(max_length=500)
    
class NotionImage(models.Model):
   notion = models.ForeignKey(Notion, on_delete=models.CASCADE)
   image = models.ImageField(upload_to='image/',blank=True, null=True)
  

class NotionFile(models.Model):
   notion = models.ForeignKey(Notion, on_delete=models.CASCADE)
   file = models.FileField(upload_to="file/",blank=True, null=True)
'''
class NotionImage(models.Model):
    notion = models.ForeignKey(Notion, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="image")# media/image/ 아래에 저장

class NotionFile(models.Model):
    notion = models.ForeignKey(Notion, on_delete=models.CASCADE)
    file = models.FileField(upload_to="file")# media/file/ 아래에 저장
'''