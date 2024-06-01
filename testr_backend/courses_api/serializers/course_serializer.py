from rest_framework import serializers
from ..models.course import Course

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['url', 'id', 'name', 'created_at', 'visible']
        