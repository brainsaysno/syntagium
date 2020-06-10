from rest_framework import serializers

from .models import Syntagi

class SyntagiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Syntagi
        fields = ["id", "title", "author", "description", "ingredients", "prep_mins", "directions", "star_rating", "image", "image_url"]