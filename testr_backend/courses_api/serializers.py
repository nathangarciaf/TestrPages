from rest_framework import serializers
from .models import Course, Section, Question

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ['url', 'id', 'name', 'created_at']
        
class SectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Section
        fields = ['url', 'id', 'course', 'name', 'created_at']

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ['url', 'id', 'section', 'name', 'description', 'created_at', 'submission_deadline', 'memory_limit',
                  'time_limit_seconds', 'cpu_limit']
        