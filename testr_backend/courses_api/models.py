from django.db import models
from django.contrib import admin
from django.utils import timezone
import datetime

class Course(models.Model):
    course_name = models.CharField(max_length=200)

    @admin.display(
        boolean=True,
        ordering="course_name",
    )

    def __str__(self):
	    return self.course_name
    
class Section(models.Model):
    section_name = models.CharField(max_length=200)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)

    def __str__(self):
	    return self.section_name
    
class Question(models.Model):
	question_text = models.CharField(max_length=200)
	section = models.ForeignKey(Section, on_delete=models.CASCADE)

	def __str__(self):
		return self.question_text