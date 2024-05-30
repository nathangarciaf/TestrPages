from django.contrib import admin
from .models.models import Course, Section, Question

class CourseAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at"]
    search_fields = ["name"]
    fieldsets = [
        (None, {"fields": ["name"]}),
        ("Created at", {"fields": ["created_at"]}),
    ]

class SectionAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at"]
    search_fields = ["name"]
    fieldsets = [
        (None, {"fields": ["name"]}),
        ("Created at", {"fields": ["created_at"]}),
        ("Course", {"fields": ["course"]}),
    ]

class QuestionAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "created_at", "submission_deadline", "memory_limit",
                    "time_limit_seconds", "cpu_limit"]
    search_fields = ["name"]
    fieldsets = [
        (None, {"fields": ["name"]}),
        ("Description", {"fields": ["description"]}),
        ("Created at", {"fields": ["created_at"]}),
        ("Submission deadline", {"fields": ["submission_deadline"]}),
        ("Memory limit", {"fields": ["memory_limit"]}),
        ("Time limit (seconds)", {"fields": ["time_limit_seconds"]}),
        ("CPU limit", {"fields": ["cpu_limit"]}),
        ("Section", {"fields": ["section"]}), 
    ]

admin.site.register(Section, SectionAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Course, CourseAdmin)