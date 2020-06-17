from django.urls import path, include
from django.conf.urls.static import static

from rest_framework.urlpatterns import format_suffix_patterns

from rest_framework import routers
from . import views

from django.conf import settings


urlpatterns = [
    path('syntagi/', views.SyntagiList),
#    url(r'/', serve, {
#        'document_root': settings.MEDIA_ROOT
#    }),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)