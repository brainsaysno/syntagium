from django.urls import path, include
from django.conf.urls.static import static

from rest_framework.urlpatterns import format_suffix_patterns

from rest_framework import routers
from . import views

from django.conf import settings

router = routers.DefaultRouter()
router.register(r'syntagi', views.SyntagiViewSet, 'syntagi')

urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns += router.urls