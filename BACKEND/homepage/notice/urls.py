"""
URL configuration for test1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
#for images, files
from django.conf.urls.static import static
from django.conf import settings
from notice import views

app_name = 'notice'

urlpatterns = [
    path('', views.notice_list, name='notice_list'),
    path('0/<int:notion_id>/', views.notice_detail, name='notice_detail'),#0이 왜 필요한진 몰겠어요..; 근데 자꾸 주소에 0 붙어서 걍 함
    path('create/', views.notice_create, name='notice_create'),
    path('get_notices_by_category/', views.get_notices_by_category, name='get_notices_by_category'),
    path('edit_notice/<int:notion_id>/', views.edit_notice, name='edit_notice'),
]
#for images, files/ 개발 환경에서 쓸라면 이거 추가해서 직접 서빙해줘야함.
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)