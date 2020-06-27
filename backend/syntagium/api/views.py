from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework import viewsets

from .serializers import SyntagiSerializer
from .models import Syntagi

from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .utils.scraper import scraper


""" class SyntagiAPIView(views.APIView):
    def get(self, request):
        queryset = Syntagi.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = Syntagi.objects.filter(user=username)
        serializer = SyntagiSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        scrape_data = scraper.scrape(request.data["url"])
        print(request.user.username)
        scrape_data["user"] = request.user.username
        serializer = SyntagiSerializer(data=scrape_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 """

class SyntagiViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        print('somerequest')
        username = request.user.username
        queryset = Syntagi.objects.filter(user=username)
        serializer = SyntagiSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        username = request.user.username
        queryset = Syntagi.objects.filter(user=username)
        syntagi = get_object_or_404(queryset, pk=pk)
        serializer = SyntagiSerializer(syntagi)
        return Response(serializer.data)

    def create(self, request):
        scrape_data = scraper.scrape(request.data["url"])
        print(request.user.username)
        scrape_data["user"] = request.user.username
        serializer = SyntagiSerializer(data=scrape_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
