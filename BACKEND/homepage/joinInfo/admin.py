from django.contrib import admin
from .models import JoinInfo

# Register your models here.

@admin.register(JoinInfo)
class JoinInfoAdmin(admin.ModelAdmin):
    list_display = ['user_name', 'user_number', 'user_major', 'user_phone_number']