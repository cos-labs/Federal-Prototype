from api.models import Document, Department, Usertype, GrantID
from api.serializers import DocumentSerializer, DepartmentSerializer, UsertypeSerializer, UserSerializer, GrantIDSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from django.contrib.auth.models import User


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'documents': reverse('document-list', request=request, format=format),
        'departments': reverse('department-list', request=request, format=format),
        'users': reverse('user-list', request=request, format=format),
        'usertypes': reverse('usertype-list', request=request, format=format),
        'grantids': reverse('grantid-list', request=request, format=format),
    })


class DocumentList(generics.ListCreateAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class DepartmentList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UsertypeList(generics.ListCreateAPIView):
    queryset = Usertype.objects.all()
    serializer_class = UsertypeSerializer

class UsertypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usertype.objects.all()
    serializer_class = UsertypeSerializer

class GrantIDList(generics.ListCreateAPIView):
    queryset = GrantID.objects.all()
    serializer_class = GrantIDSerializer

class GrantIDDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GrantID.objects.all()
    serializer_class = GrantIDSerializer


