from django.contrib import admin
from django.urls import path, include
from joinInfo.views import apply_club_user_info_view
from activity.views import upload_activity, success_page, edit_page, edit_images
from people.views import show_people
from joinResult import views
from application import views
from django.conf.urls.static import static
from django.conf import settings

app_name = "homepage"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('join/', apply_club_user_info_view, name='apply_club_user_info_view'),
    path('joinResult/', include('joinResult.urls')),
    path('login/', include('login.urls')),
    path('upload/', upload_activity, name='upload_activity'),
    path('success/', success_page, name='success_page'),
    path('edit/', edit_page, name='edit_page'),
    path('edit_images/<int:image_id>/', edit_images, name='edit_images'),
    path('people/', show_people, name='show_people'),
    path('notice/', include('notice.urls')),  
    path('application/', include('application.urls')), 
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
