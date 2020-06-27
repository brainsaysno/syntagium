from rest_framework import serializers

from .models import Syntagi

class SyntagiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Syntagi
        fields = ["id", "title", "author", "description", "prep_mins", "ingredients", "directions", "image_url", "user"]