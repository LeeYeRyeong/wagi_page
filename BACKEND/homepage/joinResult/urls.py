from django.urls import path
from . import views
app_name='joinResult'

urlpatterns = [
    path('join_button/',views.join_button, name='join_button'),
    path('send_mail/', views.send_mail, name='send_mail'),
    path('write_form/',views.write_form, name='write_form'),
    path('result/', views.result,name='result'),
    path('writeMail/', views.writeMail, name='writeMail'),
]