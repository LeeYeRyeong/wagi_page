from django.urls import path
from . import views
app_name='application'

urlpatterns = [
    path('form/', views.applicant_form, name='form'),
    path('success/', views.application_success, name='success'),
    path('admin_join/', views.admin_join, name='admin_join'),
    path('join_detail/<int:join_id>/', views.join_detail, name='join_detail'),
]