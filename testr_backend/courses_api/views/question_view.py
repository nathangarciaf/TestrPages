from ..models.models import Question
from ..serializers.question_serializer import  QuestionSerializer
from rest_framework import permissions, viewsets
from rest_framework.authentication import SessionAuthentication

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication]
    lookup_field = 'pk'