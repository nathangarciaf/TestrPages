from django.urls import include, path
from rest_framework import routers

from .views import user_view, group_view, course_view, question_view, section_view

router = routers.DefaultRouter()

router.register(r'users', user_view.UserViewSet)
router.register(r'groups', group_view.GroupViewSet)
router.register(r'courses', course_view.CourseViewSet)
router.register(r'questions', question_view.QuestionViewSet)
router.register(r'sections', section_view.SectionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]