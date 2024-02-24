from django.contrib import admin
from .models import Notion,NotionImage, NotionFile

admin.site.register(Notion)
admin.site.register(NotionImage)
admin.site.register(NotionFile)

# Register your models here.
