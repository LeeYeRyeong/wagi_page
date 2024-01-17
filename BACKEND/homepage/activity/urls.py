from django.urls import path
from . import views
app_name='activity'


urlpatterns = [
    path('upload/', views.upload_activity, name='upload_activity'),
    path('success/', views.success_page, name='success_page'),
    path('edit/', views.edit_page, name='edit_page'),
    path('edit_images/<int:image_id>/', views.edit_images, name='edit_images'),
    path('activities/', views.activities_page, name='activities_page'),
]