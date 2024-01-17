from django.contrib import admin
from .models import Activity_mt, Activity_project, Activity_study

# Register your models here.
admin.site.register(Activity_mt)
admin.site.register(Activity_project)
admin.site.register(Activity_study)