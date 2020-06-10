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
    ingredients = models.TextField()
    prep_mins = models.CharField(max_length=100)
    directions = models.TextField()
    star_rating = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to=image_directory_path, storage=image_storage, blank=True, null=True)
    image_url = models.URLField(blank=True, null=True, max_length=400)

    def __str__(self):
        return self.title