from django.urls import include, path
from rest_framework import routers

from . import viewsets

router = routers.DefaultRouter()
router.register(r"courses", viewsets.CourseViewSet)
router.register(r"sections", viewsets.SectionViewSet)
router.register(r"questions", viewsets.QuestionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]