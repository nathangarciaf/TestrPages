from django.urls import include, path
from rest_framework import routers

from .views import viewsets

router = routers.DefaultRouter()
router.register(r"courses", viewsets.CourseViewSet)
router.register(r"sections", viewsets.SectionViewSet)
router.register(r"questions", viewsets.QuestionViewSet)
router.register(r'users', viewsets.UserViewSet)
router.register(r'groups', viewsets.GroupViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]