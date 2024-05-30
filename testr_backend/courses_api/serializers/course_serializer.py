from rest_framework import serializers
from ..models.models import Course

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['url', 'id', 'name', 'created_at', 'visible']
        