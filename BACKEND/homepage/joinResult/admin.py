from django.contrib import admin
from .models import PassId, FailId, SendMail

admin.site.register(PassId)
admin.site.register(FailId)
admin.site.register(SendMail)
# Register your models here.

