from django.contrib import admin
from .models import Course, Section, Question

class SectionInline(admin.TabularInline):
    model = Section
    extra = 2

class CourseAdmin(admin.ModelAdmin):
    list_display = ["course_name"]
    search_fields = ["course_name"]
    fieldsets = [
        (None, {"fields": ["course_name"]}),
    ]

    inlines = [SectionInline]

admin.site.register(Course, CourseAdmin)

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 2

class SectionAdmin(admin.ModelAdmin):
    list_display = ["section_name"]
    search_fields = ["section_name"]
    fieldsets = [
        (None, {"fields": ["section_name"]}),
    ]

    inlines = [QuestionInline]

admin.site.register(Section, SectionAdmin)

class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question_text"]
    search_fields = ["question_text"]
    fieldsets = [
        (None, {"fields": ["question_text"]}),
    ]

admin.site.register(Question, QuestionAdmin)