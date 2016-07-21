from rest_framework import serializers
from api.models import Department, Usertype, Document, Grant
from django.contrib.auth.models import User




class DocumentSerializer(serializers.HyperlinkedModelSerializer):
    # department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'datesubmitted', 'datepublished', 'title', 'publisher', 'institution',
                  'status', 'file_link', 'pifirstname', 'pilastname',
                  'piemail', 'authorlist', 'department')
        readonly_fields = ('file_link')


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ('url', 'name')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'password')


class UsertypeSerializer(serializers.HyperlinkedModelSerializer):
    department = serializers.HyperlinkedRelatedField(view_name='department-detail', read_only=True)
    class Meta:
        model = Usertype
        fields = ('url', 'department', 'usertype', 'user')


class GrantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Grant
        fields = ('url', 'number', 'department', 'document', 'settings')
