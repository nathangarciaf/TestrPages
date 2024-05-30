from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import uuid

class Course(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    enroll_password = models.UUIDField(default=uuid.uuid4)
    visible = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"#{self.id}: {self.name}"