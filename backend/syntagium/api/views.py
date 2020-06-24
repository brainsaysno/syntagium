from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import views

from .serializers import SyntagiSerializer
from .models import Syntagi

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .utils.scraper import scraper

class SyntagiAPIView(views.APIView):
    def get(self, request):
        queryset = Syntagi.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = Syntagi.objects.filter(owner=username)
        serializer = SyntagiSerializer(queryset, many=True)
        return Response(serializer.data)
        
    def post(self, request):
        print(request.data)
        scrape_data = scraper.scrape(request.data["url"])
        print(request.user)
#        scrape_data["owner"] = User.objects.filter(username=request.user)
        serializer = SyntagiSerializer(data=scrape_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        