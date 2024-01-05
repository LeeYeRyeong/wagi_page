from django.urls import path
from . import views
app_name='joinResult'

urlpatterns = [
    path('join_button/',views.join_button, name='join_button'),
    path('writeMail/',views.writeMail, name='writeMail'),
    path('send_mail/', views.send_mail, name='send_mail'),
    path('inquiry/',views.inquiry, name='inquiry'),
    path('write_form/',views.write_form, name='write_form'),
    path('result/', views.result, name='result'),
]