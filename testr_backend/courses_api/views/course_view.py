from rest_framework import permissions, viewsets

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication]
    lookup_field = 'pk'

    @action(detail=True, methods=['get'])
    def sections(self, request, pk=None):
        course = self.get_object()
        sections = course.section_set.all()
        serializer = SectionSerializer(sections, many=True, context={'request': request})
        return Response(serializer.data)