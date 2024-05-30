class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication]
    lookup_field = 'pk'

    @action(detail=True, methods=['get'])
    def questions(self, request, pk=None):
        section = self.get_object()
        questions = section.question_set.all()
        serializer = QuestionSerializer(questions, many=True, context={'request': request})
        return Response(serializer.data)