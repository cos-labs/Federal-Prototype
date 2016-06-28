from django.shortcuts import render

# Create your views here.

from zoo.models import Animal, Enclosure, Zookeeper
from zoo.serializers import AnimalSerializer, EnclosureSerializer, ZookeeperSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework import status
from django.http import Http404


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'animals': reverse('animal-list', request=request, format=format),
        'zookeepers': reverse('zookeeper-list', request=request, format=format),
        'enclosures': reverse('enclosure-list', request=request, format=format),
    })


class AnimalList(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class AnimalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class EnclosureList(generics.ListCreateAPIView):
    queryset = Enclosure.objects.all()
    serializer_class = EnclosureSerializer


class EnclosureDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enclosure.objects.all()
    serializer_class = EnclosureSerializer


class ZookeeperList(generics.ListCreateAPIView):
    queryset = Zookeeper.objects.all()
    serializer_class = ZookeeperSerializer


class ZookeeperDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Zookeeper.objects.all()
    serializer_class = ZookeeperSerializer
