from django.urls import path, include
from django.conf.urls.static import static


from rest_framework import routers
from . import views

from django.conf import settings


router = routers.DefaultRouter()
router.register(r'syntagi', views.SyntagiViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
#    url(r'/', serve, {
#        'document_root': settings.MEDIA_ROOT
#    }),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)