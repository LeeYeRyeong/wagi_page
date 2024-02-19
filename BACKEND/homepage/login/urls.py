from django.urls import path
from . import views

app_name = 'login'

urlpatterns = [
    path('login/', views.login, name='login'),
    path('', views.home, name='home'),
    path('h/', views.health, name='health'),
]
