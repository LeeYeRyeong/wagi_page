from django.urls import path
from . import views

urlpatterns = [
    path('', views.autn_login, name='login'),
]