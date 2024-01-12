from django.urls import path
from . import views
#for images, files
from django.conf.urls.static import static
from django.conf import settings
app_name='application'

urlpatterns = [
    path('form/', views.applicant_form, name='form'),
    path('join_success/', views.join_success, name='join_success'),
    path('admin_join/', views.admin_join, name='admin_join'),
    path('join_detail/<int:join_id>/', views.join_detail, name='join_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)