from django.db import models

from django.core.files.storage import FileSystemStorage
from django.conf import settings

image_storage = FileSystemStorage(
    location=f'{settings.MEDIA_ROOT}'
)

def image_directory_path(instance, filename):
    return f'images/{filename}'

class Syntagi(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    prep_mins = models.CharField(max_length=100)
    ingredients = models.TextField()
    directions = models.TextField()
    image_url = models.URLField(blank=True, null=True, max_length=400)
    user = models.CharField(max_length=100)
#    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title