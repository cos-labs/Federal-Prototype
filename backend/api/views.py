from django.shortcuts import render

from api.models import Document, Author, Department
from api.serializers import DocumentSerializer, AuthorSerializer, DepartmentSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
	return Response({
		'documents': reverse('document-list', request=request, format=format),
		'authors': reverse('author-list', request=request, format=format),
		'departments': reverse('department-list', request=request, format=format),
		})


class DocumentList(generics.ListCreateAPIView):
	queryset = Document.objects.all()
	serializer_class = DocumentSerializer

class DocumentDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Document.objects.all()
	serializer_class = DocumentSerializer



class AuthorList(generics.ListCreateAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer

class AuthorDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Author.objects.all()
	serializer_class = AuthorSerializer



class DepartmentList(generics.ListCreateAPIView):
	queryset = Department.objects.all()
	serializer_class = DepartmentSerializer

class DepartmentDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Department.objects.all()
	serializer_class = DepartmentSerializer

	