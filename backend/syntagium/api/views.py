from django.shortcuts import render

from rest_framework import viewsets

from .serializers import SyntagiSerializer
from .models import Syntagi

class SyntagiViewSet(viewsets.ModelViewSet):
    queryset = Syntagi.objects.all()
    serializer_class = SyntagiSerializer