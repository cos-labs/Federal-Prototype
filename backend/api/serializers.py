from rest_framework import serializers
from api.models import Document, Author, Department

class DocumentSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Document
		fields = ('url', 'date_submitted', 'date_published', 'title', 'publisher', 'institution', 
			'status', 'file_link', 'primary_investigator')

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
	documents = serializers.HyperlinkedRelatedField(many=True, view_name='document-detail', read_only=True)
	class Meta:
		model = Author
		fields = ('url', 'name_first', 'name_middle', 'name_last', 'email', 'documents')

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
	documents = serializers.HyperlinkedRelatedField(many=True, view_name='document-detail', read_only=True)
	class Meta:
		model = Department
		fields = ('url', 'name', 'documents')