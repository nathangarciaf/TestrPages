from rest_framework import serializers
from ..models.models import Section

class SectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Section
        fields = ['url', 'id', 'course', 'name', 'created_at']