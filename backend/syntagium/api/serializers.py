from rest_framework import serializers

from .models import Syntagi

class SyntagiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Syntagi
        fields = '__all__'