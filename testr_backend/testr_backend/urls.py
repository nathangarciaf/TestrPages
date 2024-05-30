from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('user_api.urls')),
    path('api/' , include('polls_api.urls')),
    path('', include('courses_api.urls')),
]
