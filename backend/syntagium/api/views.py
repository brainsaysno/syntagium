from django.shortcuts import render

from rest_framework import viewsets

from .serializers import SyntagiSerializer
from .models import Syntagi

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .utils.scraper import scraper

class SyntagiViewSet(viewsets.ModelViewSet):
    queryset = Syntagi.objects.all()
    serializer_class = SyntagiSerializer


@api_view(['GET', 'POST'])
def SyntagiList(request):
    if request.method == 'GET':
        queryset = Syntagi.objects.all()
        serializer = SyntagiSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        print(request.data)
        scrape_data = scraper.scrape(request.data["url"])
        serializer = SyntagiSerializer(data=scrape_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)