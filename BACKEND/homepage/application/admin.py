from django.contrib import admin
from .models import Application

# Register your models here.


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['introduction', 'motivation', 'project_experience', 'study_experience', 'submit_date']