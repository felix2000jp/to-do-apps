from django.db import models

# Create your models here.
class ToDo(models.Model):
    name   = models.CharField(max_length=100)
    status = models.BooleanField(default=False)

    class Meta():
        ordering = ['status']

    def __str__(self):
        return self.name