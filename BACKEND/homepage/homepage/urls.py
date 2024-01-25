from django.contrib import admin
from django.urls import path, include
from joinInfo.views import apply_club_user_info_view
from activity.views import upload_activity, success_page, edit_page, edit_images, activities_page
from people.views import show_people_1, show_people_2
from joinResult import views
from application import views
from makers.views import show_makers
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),

    path('join/', apply_club_user_info_view, name='apply_club_user_info_view'),
    path('joinResult/', include('joinResult.urls')),

    path('', include('login.urls')),

    path('upload/', upload_activity, name='upload_activity'),
    path('success/', success_page, name='success_page'),
    path('edit/', edit_page, name='edit_page'),
    path('edit_images/<int:image_id>/', edit_images, name='edit_images'),
    path('activities/', activities_page, name='activities_page'),

    path('people_1/', show_people_1, name='show_people_1'),
    path('people_2/', show_people_2, name='show_people_2'),

    path('notice/', include('notice.urls')),  

    path('application/', include('application.urls')),

    path('makers/', show_makers, name='show_makers'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)