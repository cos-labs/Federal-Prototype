from rest_framework import serializers
from api.models import Department, Usertype, Document, GrantID
from django.contrib.auth.models import User


class DocumentSerializer(serializers.HyperlinkedModelSerializer):
    departments = serializers.HyperlinkedRelatedField(many=True, view_name='department-detail', read_only=True)
    grantids = serializers.HyperlinkedRelatedField(many=True, view_name='snippet-detail', read_only=True)
    class Meta:
        model = Document
        fields = ('url', 'date_submitted', 'date_published', 'title', 'publisher', 'institution',
                  'status', 'file_link', 'PI_first_name', 'PI_last_name',
                  'PI_email', 'author_list', 'departments', 'grantids')


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


class GrantIDSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GrantID
        fields = ('url', 'number', 'department', 'document')
